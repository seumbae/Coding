WITH TMP AS(
    SELECT HISTORY.CAR_ID, CAR.CAR_TYPE, FLOOR(DAILY_FEE*30 * (100-DISCOUNT_RATE)/100) AS FEE
    FROM CAR_RENTAL_COMPANY_CAR CAR JOIN CAR_RENTAL_COMPANY_RENTAL_HISTORY HISTORY
    ON CAR.CAR_ID = HISTORY.CAR_ID JOIN CAR_RENTAL_COMPANY_DISCOUNT_PLAN PLAN
    ON PLAN.CAR_TYPE = CAR.CAR_TYPE AND DURATION_TYPE = '30일 이상' AND CAR.CAR_TYPE IN ('세단', 'SUV')
    WHERE CAR.CAR_ID NOT IN
        (SELECT CAR_ID FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
        WHERE START_DATE < '2022-12-01' AND '2022-11-01'<= END_DATE
    )
)

SELECT * 
FROM TMP
WHERE 500000 <= FEE AND FEE < 2000000
GROUP BY CAR_ID
ORDER BY FEE DESC, CAR_TYPE, CAR_ID DESC
