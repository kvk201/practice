import pandas as pd

df = pd.read_csv('pokemon_data.csv')
df_excel = pd.read_excel('pokemon_data.xlsx')
df_txt = pd.read_csv('pokemon_data.txt',delimiter='\t')
df_hold = pd.read_csv('holdings.txt', delimiter="|")

#print(df_txt)

# set headers
#df.columns('',''...)


#print(df[['Name','HP']][10:20])
# print(df.iloc[0:6])
#print(df.iloc[4,1])

# to iterate through each row
# for index, row in df.iterrows():
#     print(index, row['Name'])

# to find rows based on specific conditions 

# select rows where the "Type 1" column is "Fire"
# fire_rows = df.loc[df['Type 1'] == 'Fire']
# print(fire_rows)

# to iterate through each row and check for condition using for loop
# for index, row in df.iterrows():
#       if(row['Type 1'] == 'Fire'):
#          print(index, row['Name'])

# select name where the "Type 1" column is "Fire" || same as previous one without a loop
# fire_names = df.loc[df['Type 1'] == 'Fire',['Name','HP']]
#print(fire_names)

# mean, std deviation, 25, 50, 75%, min, max
#print(df.describe())

#sort
# print(df.sort_values(['Type 1','HP'], ascending=False))
#   print(df.sort_values(['Type 1','HP'], ascending=[0,1]))

#add column 
#df['total'] = df['HP'] + df['Attack'] + df['Defense']

#drop/delete column
#df = df.drop(columns=['total'])

#reorder df
# df = df[['Name', 'total', 'HP', 'Attack', 'Defense']]
# print(df)

# export to file
# df.to_csv('modified.csv',index=False)
# df.to_excel('modified.xlsx',index=False)
# df.to_csv('modified.txt',index=False, sep= '\t')

# reset index
#df = df.reset_index()

## filtering

#x= df.loc[  ((df['Type 1'] == 'Fire') | (df['Type 2'] == 'Water') ) & (df['HP']>70)   ]

#y = df.loc[     df['Type 1'].str.contains('grass|fire',case=False)     ]


## make conditional changes (locate column then assign value)

# df.loc[ df['Type 1'] == 'Fire', 'Legendary'] = True 
# print(df.loc[df['Type 1'].str.contains('Fire')])

