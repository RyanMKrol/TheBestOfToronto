import sys
def main():
    file = sys.argv[1]
    f = open(file, "r")
    line = f.readline()
    while line:
        if "class=\"torontolists-item\"" not in line:
            line = f.readline()
        else:
            break

    second_line = f.readline()
    desired_line = ""
    while second_line:
        if "<a" not in second_line:
            second_line = f.readline()
            continue
        else:
            desired_line = second_line
            break
    f.close()
    print (desired_line)

if __name__ == '__main__':
    main()
