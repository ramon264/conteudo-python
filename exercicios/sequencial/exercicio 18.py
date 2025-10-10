mb = float(input("digite o tamanho do arquivo (em mb): "))

mbps = float(input("digite a velocidade da internet (em mbps): "))

resultado = mb * 8

velocidade_segundos = resultado / mbps

velocidade_minutos = velocidade_segundos / 60

print("o tempo aproximado de dowload é de ", velocidade_minutos,"minutos")

