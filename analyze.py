import pandas as pd

data = pd.read_table('logs/app.log', sep=" ", header=None, usecols=[0,1,2,3,4,5,6])

print(data)
