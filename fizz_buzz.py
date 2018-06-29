for num in range(1,101):
    if num % 3==0 and num % 5==0:
        state="FizzBuzz"
    elif num % 3 == 0:
        state="Fizz"
    elif num  % 5 == 0:
        state="Buzz"
    else:
        state=""
    print(f"{num}  {state}")
