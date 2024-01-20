from pathlib import Path
from os import path
from matplotlib import pyplot

base_path = Path(__file__).parent

data = open(path.join(base_path, "life_expectancies_usa.txt"), "r").readlines()
dates = []
male_life_expectancies = []
female_life_expectancies = []

for line in data:
    date, male_life_expectancy, female_life_expectancy = line.split(",")
    dates.append(date)
    male_life_expectancies.append(male_life_expectancy)
    female_life_expectancies.append(female_life_expectancy)

pyplot.plot(dates, male_life_expectancies, "bo-", label="Men")
pyplot.plot(dates, female_life_expectancies, "mo-", label="Women")

pyplot.legend(loc="upper left")
pyplot.ylabel("Age")
pyplot.xlabel("Year")
pyplot.title("Life expectancies for women and men in the USA over time")
pyplot.show()
