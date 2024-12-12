import { useState, useEffect } from 'react';
import {
  ModalFormControl,
  ModalProps,
  NewTodo,
  TodoType,
} from "../types";

const Modal = (
  {currentTodo, setCurrentTodo, sendUpdates, modalVisible, setModalVisible, toggleComplete, createTodo}: ModalProps
) => {
  const [formData, setFormData] = useState<NewTodo>({title: ''});

  useEffect(() => {
    if (currentTodo) {
      setModalVisible(true);
      let {description} = currentTodo;
      if (description === BLANK_DESCRIPTION_CODE) {
        description = convertDescription(description);
      }
      const {title, day, month, year} = currentTodo;
      setFormData({title, day, month, year, description});
    }
  }, [currentTodo, setModalVisible]);

  const BLANK_DESCRIPTION_CODE =
    '                   '; // 19 blank spaces, unlikely to be user input

  const modalStyle = () => {
    if (modalVisible) {
      return { display: '' };
    } else {
      return { display: 'none'};
    }
  }

  const closeModal = () => {
    setModalVisible(false);
    setCurrentTodo(null);
    setFormData({title: '', day: '', month: '', year: '', description: ''});
  }

  const handleCompleteClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    if (currentTodo === null) {
      alert('Cannot mark as complete as item has not been created yet!');
    } else {
      if (!currentTodo.completed) {
        toggleComplete(currentTodo)
          .catch((error: unknown) => {console.error(error)});
      }
      closeModal();
    }
  }

  // allows server update of description which is displayed as reset once converted
  const convertDescription = (input: string | undefined) => {
    if (input === BLANK_DESCRIPTION_CODE) {
      return '';
    } else if (input === '') {
      return BLANK_DESCRIPTION_CODE
    } else {
      return input;
    }
  }

  const handleChange = (event: React.ChangeEvent<ModalFormControl>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.title.length < 3) {
      alert('You must enter a title at least 3 characters long.');
      return;
    }

    if (currentTodo) {
      // update current Todo
      const updateData: TodoType = {
        id: Number(currentTodo.id),
        completed: currentTodo.completed,
        ...formData,
      };

      if (updateData.description === '') {
        updateData.description = convertDescription(updateData.description);
      }

      sendUpdates(updateData)
        .then(() => {closeModal()})
        .catch((error: unknown) => {console.error(error)});
    } else {
      // add new todo
      createTodo(formData)
        .then(() => {closeModal()})
        .catch((error: unknown) => {console.error(error)});
    }
  }

  return (
    <div style={modalStyle()} >
      <div className="modal" id="modal_layer" onClick={closeModal} ></div>
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
                  <select id="day" name="day" onChange={handleChange} value={formData.day}>
                    <option value='  '>Day</option>
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
                  <select id="month" name="month" onChange={handleChange} value={formData.month}>
                    <option value='  '>Month</option>
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
                  <select id="year" name="year" onChange={handleChange} value={formData.year}>
                    <option value='    '>Year</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                  </select>
                </div>
              </li>
              <li>
                <label htmlFor="description">Description</label>
                <textarea cols={50} rows={7} name="description" value={formData.description}
                  placeholder="Description" onChange={handleChange}></textarea>
              </li>
              <li>
                <input type="submit" value="Save" />
                <button name="complete" onClick={handleCompleteClick}>
                  Mark As Complete
                </button>
              </li>
            </ul>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Modal;