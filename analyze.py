import pandas as pd

# Read log file into Data Frame
    # split log lines and filter based on article name / query
with open('logs/app.log') as logfile:
    frame = pd.read_json(logfile, lines=True)
    lines = frame['message'].str.split(' ', expand=True)
    print(lines[6].to_string())
    print(lines[lines[6].str.contains("Latest")])
    print(frame.to_string())
    print(frame.columns)

# generate metric of read count for /Latest_plane_crash article
    # graph over 24 hours
# generate metric of article dwell time (request time - onunload time)
    # graph
# generate funnel of informative button for article
    # for readers with dwell time > 60 seconds
        #   ratio of read / informative clicks
        # graph
