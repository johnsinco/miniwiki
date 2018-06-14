import pandas as pd

# read log file into DF
with open('logs/app.log') as logfile:
    frame = pd.read_json(logfile, lines=True)
    print(frame.to_string())
