API="http://localhost:4741"
URL_PATH="/entries/date"

curl "${API}${URL_PATH}" \
--include \
--request GET \
--header "Authorization: Bearer ${TOKEN}" \
