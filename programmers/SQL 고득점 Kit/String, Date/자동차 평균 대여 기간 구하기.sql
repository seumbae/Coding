SELECT CAR_ID, ROUND(AVG(DATEDIFF(END_DATE, START_DATE)+1),1) AS AVERAGE_DURATION
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
GROUP BY CAR_ID
HAVING AVERAGE_DURATION >= 7
ORDER BY AVERAGE_DURATION DESC, CAR_ID DESC

-- DATEDIFF에서 +1을 해주는 이유는 START_DATE의 날까지 포함시켜야 하기 때문이다. (ex. 두 수를 포함하여 사이에 있는 수의 개수를 구하는 수식 b-a+1)