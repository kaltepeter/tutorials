from os import path
import time

basepath = path.dirname(__file__)

my_words = [elt.strip() for elt in open(path.join(basepath, "sonnet_words.txt"), "r").readlines()]
word_list = [elt.strip() for elt in open(path.join(basepath, "sowpods.txt"), "r").readlines()]
# word_dict = dict((elt, 1) for elt in word_list)
word_set = set(word_list)

counter = 0

start = time.time()
for word in my_words:
    if word not in word_set:
        print(word)
        counter += 1
end = time.time()

print("Total new words: %d" % counter)
print(f"Time elapsed: {(end - start):.2f}")
