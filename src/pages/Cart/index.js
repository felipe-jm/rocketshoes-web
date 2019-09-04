import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>AMOUNT</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRZxa8MKAODgET8q4Ad_iFGKnbTujWOWMH0wCozPvc0xIkQbdM8hKldkZQKhTjQHsA4BZRMj6Qk78ZN5lrN2BRHTrnJMeofFL2qyQleqBeagZ1suK0fkA-O4vg&usqp=CAE"
                alt="Shoe"
              />
            </td>
            <td>
              <strong>Awesome shoe</strong>
              <span>R$99,00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#005b96" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#005b96" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$198,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#005b96" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finish order</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1942,32</strong>
        </Total>
      </footer>
    </Container>
  );
}
