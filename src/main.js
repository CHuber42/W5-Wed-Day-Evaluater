import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { buttonClickActions } from './helper-functions'



$("button").click(function() {
  buttonClickActions();
});
