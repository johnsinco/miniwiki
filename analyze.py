import pandas as pd

pd.set_option('display.max_colwidth', -1)

# read log file into DF
with open('logs/app.log') as logfile:
    frame = pd.read_json(logfile, lines=True)
    # frame['message'].apply(lambda x: x.split(' ', expand=True))
    # frame['split_message'] = frame['message'].str.split()
    lines = frame['message'].str.split(' ', expand=True)
    print(lines[6].to_string())
    print(lines[lines[6].str.contains("Latest")])
    print(frame.to_string())
    print(frame.columns)
    # mask = frame['message'][1].str.contains("Latest_plane_cras")
    # print(mask)


# generate metric of read count for /Latest_plane_crash article
    # graph over 24 hours
# generate metric of article dwell time (request time - onunload time)
    # graph
# generate funnel of informative button for article
    # for readers with dwell time > 60 seconds
        #   ratio of read / informative clicks
        # graph
