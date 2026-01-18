import pandas as pd
import json
import os
from datetime import datetime

# Configuration
INPUT_FILE = '/home/wisnu/Documents/Personal/projects/Personal Branding/My Works at McEasy.xlsx'
OUTPUT_FILE = 'src/data/dashboard-metrics.json'

def process_data():
    print(f"Loading data from {INPUT_FILE}...")
    try:
        df = pd.read_excel(INPUT_FILE)
    except FileNotFoundError:
        print(f"Error: File not found at {INPUT_FILE}")
        return
    except Exception as e:
        print(f"Error loading file: {e}")
        return

    # Clean Data
    # Normalize column names: strip whitespace, replace newlines
    df.columns = [c.strip().replace('\n', ' ') for c in df.columns]
    
    # Convert 'Duration (hour)' to numeric, coercing errors to NaN
    target_duration_col = 'Duration (hour)'
    if target_duration_col not in df.columns:
        print(f"Error: Column '{target_duration_col}' not found.")
        print(f"Available columns: {df.columns.tolist()}")
        return

    df[target_duration_col] = pd.to_numeric(df[target_duration_col], errors='coerce')
    
    # Ignore rows where Duration < 0 (Leave/Holiday) or NaN
    df = df[df[target_duration_col] > 0]
    
    # Ensure Date column exists and is datetime
    # Assuming there is a date column. Let's look for standard date columns or 'Date'
    # Based on user description "Group tasks by Month (YYYY-MM)", there must be a date.
    # I'll check for 'Date' or 'Day'. If strictly following user prompt, user said "Group tasks by Month (YYYY-MM)" but didn't specify column name for date. 
    # I will assume 'Date' exists. If not I might need to print columns to debug.
    date_col = None
    for col in df.columns:
        if 'date' in col.lower():
            date_col = col
            break
            
    if date_col:
        df[date_col] = pd.to_datetime(df[date_col])
    else:
        print("Warning: No 'Date' column found. Ticket Velocity might be empty.")

    # Metric 1: Total Hours
    total_hours = df['Duration (hour)'].sum()

    # Metric 2: Ticket Velocity (Group by Month YYYY-MM)
    ticket_velocity = {}
    if date_col:
        df['Month'] = df[date_col].dt.strftime('%Y-%m')
        velocity_series = df.groupby('Month').size()
        ticket_velocity = [{"month": m, "tickets": int(c)} for m, c in velocity_series.items()]
        # Sort by month
        ticket_velocity.sort(key=lambda x: x['month'])

    # Metric 3: Work Distribution
    # Categories: Code Review, Bugs, Features, Maintenance
    def categorize_task(task_name):
        if not isinstance(task_name, str):
            return "Maintenance"
        task_lower = task_name.lower()
        if "icr" in task_lower or "review" in task_lower:
            return "Code Review"
        if "fix" in task_lower or "bug" in task_lower:
            return "Bugs"
        if any(x in task_lower for x in ["feat", "sync", "create", "add"]):
            return "Features"
        return "Maintenance"

    if 'Task' in df.columns:
        df['Category'] = df['Task'].apply(categorize_task)
        distribution_series = df['Category'].value_counts()
        work_distribution = [{"name": cat, "value": int(count)} for cat, count in distribution_series.items()]
    else:
        print("Warning: 'Task' column not found. Work Distribution will be empty.")
        work_distribution = []

    # Heatmap Data (GitHub style contribution graph for last 365 days)
    # We need count per day.
    heatmap_data = []
    if date_col:
        daily_counts = df.groupby(df[date_col].dt.strftime('%Y-%m-%d')).size()
        heatmap_data = [{"date": date, "count": int(count)} for date, count in daily_counts.items()]

    # Construct Output JSON
    output_data = {
        "total_hours": round(float(total_hours), 2),
        "total_tickets": len(df),
        "ticket_velocity": ticket_velocity,
        "work_distribution": work_distribution,
        "activity_heatmap": heatmap_data
    }

    # Save to JSON
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    with open(OUTPUT_FILE, 'w') as f:
        json.dump(output_data, f, indent=2)
    
    print(f"Successfully generated metrics to {OUTPUT_FILE}")
    print(f"Total Hours: {total_hours}")
    print(f"Total Tickets: {len(df)}")

if __name__ == "__main__":
    process_data()
