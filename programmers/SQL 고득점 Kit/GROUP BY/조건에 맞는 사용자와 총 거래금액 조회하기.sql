SELECT USER_ID, NICKNAME, SUM(PRICE) AS TOTAL_SALES
FROM USED_GOODS_BOARD BOARD JOIN
USED_GOODS_USER USERS ON BOARD.WRITER_ID = USERS.USER_ID
WHERE STATUS = 'DONE'
GROUP BY WRITER_ID
HAVING 700000 <= SUM(PRICE)
ORDER BY TOTAL_SALES