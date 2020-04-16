import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { buttonClickActions } from './helper-functions'

$("button").click(function() {
  $("#outputDay").empty();
  let day = parseInt($("#inputDate").val());
  let year = parseInt($("#inputYear").val());
  let month = parseInt($("#inputMonth").val());
  let result = buttonClickActions(year, month, day);
  $("#outputDay").append(result);
});
