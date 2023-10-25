'''
def calcMonthlyCost(balance, annualInterestRate):
  monthlyInterestRate = annualInterestRate / 12
  monthlyCost =  balance * ( 1 + monthlyInterestRate) / 12
  return round(monthlyCost, 2)
'''


def calcRemainingBalance(balance, annualInterestRate, rate):
  monthlyInterestRate = annualInterestRate / 12
  monthlyInterstCost =  balance * monthlyInterestRate
  remainingBalance = balance - rate + monthlyInterstCost
  return remainingBalance


def ratenPlan(balance, annualInterestRate, rate):
  for _ in range(12):
    remainingBalance = calcRemainingBalance(balance, 0.2, rate)
    balance = remainingBalance

  print('RemainingBalance: ', round(remainingBalance, 2))

  if remainingBalance >= 0:
    #return
    print('die Rate ist zu klein')
  else:
    print('die Rate ist zu groß')


def calcLowerBound(balance):
  lowerBound = balance/12
  return round(lowerBound, 2)

def calcUpperBound(balance, annualInterestRate):
  monthlyInterestRate = annualInterestRate / 12
  upperBound = (balance * (1 + monthlyInterestRate)**12) / 12
  return round(upperBound, 2)


ratenPlan(320000, 0.2, 27000)


#print("Lowest Payment:", round(payment, 2))



'''
def calcTotalLoanCost(balance, annualInterestRate):
  return balance * (1 + annualInterestRate)

print ('Kosten wenn die Gesamtsumme ohne monatliche Raten am Ende des Jahres gezahlt würden')
print('GesamtKosten: ', calcTotalLoanCost(320000, 0.2))
print('Rate: ', calcTotalLoanCost(320000, 0.2)/12)
print('---')
'''





'''
print('Monatsrate: ', calcMonthlyCost(320000, 0.2))

print('Ratenplan: ', ratenPlan(320000, 0.2, 0))


print(calcLowerBound(320000))
print(calcUpperBound(320000, 0.2))

print( round(calcUpperBound(320000, 0.2)*12, 2) )

# annualInterestRate
#def getnewBounds(lowerBound, upperBound):
'''
