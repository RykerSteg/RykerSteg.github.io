import random

def main():
    randnums = [16.2, 75.1, 52.3]
    print(randnums)

    append_random_numbers(randnums)
    print(randnums)

    append_random_numbers(randnums, 3)
    print(randnums)

    words_list = []
    append_random_words(words_list)
    print(words_list)

    append_random_words(words_list, 10)
    print(words_list)


def append_random_numbers(numbersList, quantity=1):
    i = 0
    while i < quantity:
        newNum = round(random.uniform(0,100),1)

        numbersList.append(newNum)
        i += 1

def append_random_words(words_list, quantity=1):
    i = 0
    while i < quantity:
        newWord = random.choices(words)
        words_list.append(newWord)
        i += 1


words = ["hello", "Good", "run", "take", "Cry", "Scream", "Yell","Kick","Run","Score","Tackle","Celebrate","Love","Work"]
if __name__ == "__main__":
    main()
