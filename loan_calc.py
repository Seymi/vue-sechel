def calcLowerBound(balance):
  lowerBound = balance/12
  return round(lowerBound, 2)

def calcUpperBound(balance, annualInterestRate):
  monthlyInterestRate = annualInterestRate / 12
  upperBound = (balance * (1 + monthlyInterestRate)**12) / 12
  return round(upperBound, 2)

def calcRemainingBalance(balance, annualInterestRate, rate):
  monthlyInterestRate = annualInterestRate / 12
  remainingBalance = balance - rate
  monthlyInterstCost =  remainingBalance * monthlyInterestRate
  remainingBalance += monthlyInterstCost
  return remainingBalance


def checkPayment(balance, annualInterestRate, rate):
  for _ in range(12):
    remainingBalance = calcRemainingBalance(balance, annualInterestRate, rate)
    balance = remainingBalance
    #print('RemainingBalance: ', round(remainingBalance, 3))
  return remainingBalance


def calcRate(lower, upper):
  rate = (lower + upper)/2
  remainingBalance = evaluateCheckPayment(balance, annualInterestRate, rate)

  if remainingBalance > 0.01:
    lower = rate
    calcRate(lower, upper)
  elif remainingBalance < -0.01:
    upper = rate
    calcRate(lower, upper)
  else:
    print( 'Lowest Payment: ', round(rate, 2) )
    return rate


def evaluateCheckPayment(balance, interestRate, rate):
  #print('rechne mit Rate ', rate)
  remainingBalance = checkPayment(balance, interestRate, rate)
  '''
  if remainingBalance > 0.01:
    print('die Rate ist zu klein')
  elif remainingBalance < -0.01:
    print('die Rate ist zu groß')
  else:
    print('die minimale Rate beträgt ', round(rate, 2))
    print("Lowest Payment:", round(rate, 2))
  '''
  return remainingBalance

balance = 320000
annualInterestRate = 0.2

lowerBound = calcLowerBound(balance)
upperBound = calcUpperBound(balance, annualInterestRate)

rate = calcRate(lowerBound, upperBound)
