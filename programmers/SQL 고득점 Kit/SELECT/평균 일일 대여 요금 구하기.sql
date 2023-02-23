SELECT ROUND(AVG(DAILY_FEE),0) AS AVERAGE_FEE FROM CAR_RENTAL_COMPANY_CAR WHERE CAR_TYPE = 'SUV'

-- 반올림 ROUND(수, 몇자리에서 반올림할지)
-- 자르기 ROUND(수, 반올림할 자리수, [funtion]), function(option): 생략시 기본값 0 / 1 입력시 반올림할 자리수 이하 절삭
-- 올림 CEILING(수)
-- 내림 FLOOR(수)