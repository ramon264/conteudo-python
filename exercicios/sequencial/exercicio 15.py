salario = float(input("quanto você ganha por hora? "))

horas = int(input("quantas horas você trabalhou este mês? "))

soma = salario * horas

print("o seu salário este mês será de", soma)

ir = soma * 0.89

ir_2 = ir / salario

inss = soma * 0.92

inss_2 = inss / salario

S = soma * 0.95

sin = S / salario

resultado = soma - ir_2 - inss_2 - sin

print("você pagará ", ir_2 ,"ao imposto de renda ")

print("você pagará", inss_2,"ao INSS")

print("você pagará", sin,"reais ao sindicato")

print("restará", resultado, "reais para você")
