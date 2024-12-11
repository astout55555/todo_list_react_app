import { useState, useEffect } from 'react';
import {
  ModalProps,
  NewTodo,
} from "../types";

const Modal = (
  {currentTodo, setCurrentTodo, modalVisible, setModalVisible, createTodo}: ModalProps
) => {
  const [formData, setFormData] = useState<NewTodo>({title: ''});

  useEffect(() => {
    if (currentTodo) {
      setModalVisible(true);
      // and setFormData to the values of the selected todo
    } // else, setFormData to empty strings / defaults
  }, [currentTodo, setModalVisible]);

  const modalStyle = () => {
    if (modalVisible) {
      return { display: '' };
    } else {
      return { display: 'none'};
    }
  }

  const handleClickOut = () => {
    setModalVisible(false);
    setCurrentTodo(null);
    setFormData({title: '', day: '', month: '', year: '', description: ''});
  }

  const handleCompleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (currentTodo === null) {
      alert('Cannot mark as complete as item has not been created yet!');
    } // add else conditional flow to handle marking existing todo complete
  } // best done with function defined and passed down from App component

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  } // will also need to handle other types of events/elements...

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // implement form submission here, add or update depending on currentTodo
  }

  return (
    <div style={modalStyle()} >
      <div className="modal" id="modal_layer" onClick={handleClickOut} ></div>
      <div className="modal" id="form_modal">
        <form action="" method="post" className="modalForm" onSubmit={handleSubmit}>
          <fieldset>
            <ul>
              <li>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" placeholder="Item 1"
                  onChange={handleChange} value={formData.title} />
              </li>
              <li>
                <label htmlFor="due">Due Date</label>
                <div className="date">
                  <select id="day" name="day">
                    <option>Day</option>
                    <option value="01">1</option>
                    <option value="02">2</option>
                    <option value="03">3</option>
                    <option value="04">4</option>
                    <option value="05">5</option>
                    <option value="06">6</option>
                    <option value="07">7</option>
                    <option value="08">8</option>
                    <option value="09">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>  /
                  <select id="month" name="month">
                    <option>Month</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select> /
                  <select id="year" name="year">
                    <option>Year</option>
                    <option>2014</option>
                    <option>2015</option>
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                  </select>
                </div>
              </li>
              <li>
                <label htmlFor="description">Description</label>
                <textarea cols={50} rows={7} name="description" placeholder="Description"></textarea>
              </li>
              <li>
                <input type="submit" value="Save" />
                <button name="complete" onClick={handleCompleteClick}>Mark As Complete</button>
              </li>
            </ul>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Modal;