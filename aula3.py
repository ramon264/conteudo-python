# operadores matemáticos
import math
# + <- soma: soma é o valor de esquerda com o da direita
# - <- subtração: subtrai o valor da esquerda pelo o da direita
# * <- multiplicação: multiplica o valor a esquerda pelo o da direita
# / <- divisão: divide o valor da esquerda pelo o da direita

# ** <- potência: eleva o valor da esquerda pelo o da direita
# math.sqrt(valor) <- raiz quadrada: tira a raiz quadrada do valor

# // <- inteiro da divisão: quando faz uma divisão que resulta em
# valor float, retorna só a parte inteira. 10.Só retornaria apenas 10.

# % <- resto de divisão: retorna o valor do resto quando a divisão
# não é exata. 5/2 teria o resto 1. util na indentificação dos valores por

valor_1 = int(input("Digite o valor 1: "))
valor_2 = int(input("Digite o valor 2: "))

print("os valores digitados são", valor_1, "e", valor_2)

resultado = valor_1 + valor_2
print("A soma dos dois valores é", resultado)

resultado = valor_1 - valor_2
print("A subtração dos dois valores é", resultado)

resultado = valor_1 * valor_2
print("A muliplicação do dois valores é", resultado)

resultado = valor_1 / valor_2
print("a divisão dos dois valores é", resultado)

resultado = valor_1//valor_2
print("resultado inteiro da divisão de valores é",resultado)

resultado = valor_1 % valor_2
print("o resto da divisão dos valores é", resultado)

resultado = valor_1 ** valor_2
print("o resultado na potenciação dos valores é", resultado)

resultado = math.sqrt(valor_1)
print("a raiz quadrada de de",valor_1,"e", resultado)

print("o valor de pi e",math.pi)