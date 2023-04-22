SELECT YEAR(SALES_DATE) AS YEAR, MONTH(SALES_DATE) AS MONTH, GENDER, COUNT(DISTINCT INFO.USER_ID) AS USERS
FROM USER_INFO INFO JOIN ONLINE_SALE SALE
ON INFO.USER_ID = SALE.USER_ID
GROUP BY YEAR, MONTH, GENDER
HAVING GENDER IS NOT NULL
ORDER BY YEAR, MONTH, GENDER
