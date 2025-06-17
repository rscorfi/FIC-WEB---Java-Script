n = int(input("Informe a quantidade de termos de Fibonacci:"))
n1 = 0
n2 = 1
n3 = 0
i = 0
nfib = 0

for i in range (n):
    if i <= 1:
        print (i)
    else:
        n3 = n1 + n2
        n1