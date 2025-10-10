import math
area = int(input("quantos metros da ára serão pintados?"))

litro = 3
cada_tinta = 18
preco = 80

soma = area / litro

result = (soma / cada_tinta)

resultado = math.floor(result * preco)

print("a quantidade de latas que você precisará é de", result)

print("o preço total dessa compra é de", resultado)