-- case1
SELECT PT_NAME, PT_NO, GEND_CD, AGE, IFNULL(TLNO, 'NONE') AS TLNO FROM PATIENT 
WHERE GEND_CD = 'W'AND AGE <= 12
ORDER BY AGE DESC, PT_NAME ASC
-- IFNULL(expr1, expr2): expr1이 null이면 expr2리턴, null이 아니라면 expr1 리턴 -> expr1 === null ? expr2 : expr1
-- 비슷하게 IF(컬럼 IS NULL, expr1, expr2)도 사용가능


-- case2
SELECT
    PT_NAME,
    PT_NO,
    GEND_CD,
    AGE,
    CASE
        WHEN TLNO IS NULL THEN 'NONE'
        ELSE TLNO 
        END 
        AS TLNO
FROM PATIENT
WHERE AGE <=12
    AND GEND_CD = 'W'
ORDER BY AGE DESC, PT_NAME ASC
-- case를 이용할 수 있다.

