SELECT DR_NAME, DR_ID, MCDP_CD, DATE_FORMAT(HIRE_YMD, '%Y-%m-%d') AS HIRE_YMD FROM DOCTOR
WHERE MCDP_CD = 'CS' OR MCDP_CD = 'GS' -- WHERE MCDP_CD IN ('CS', 'GS')
ORDER BY HIRE_YMD DESC, DR_NAME ASC

-- IN은 OR과 동일하게 사용할 수 있지만, IN 연산자가 OR 연산자보다 실행 속도가 빠르며, IN 연산자안에 다른 SELECT문(서브쿼리?)을 넣을 수도 있다.