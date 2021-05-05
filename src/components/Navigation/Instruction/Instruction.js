import s from './Instruction.module.css';
import React from 'react';
import Layout from '../../Layout/Layout';

const Instruction = () => {
  return (
    <div className={s.container}>
      <Layout>
        <h3>Instruction Page</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          aliquid, consequatur cumque, cupiditate doloremque dolores eaque earum
          eos et ex exercitationem expedita facilis hic laudantium molestiae
          necessitatibus non numquam obcaecati
          <br />
          <br />
          perspiciatis quia reprehenderit rerum similique vel veritatis
          voluptatem. Accusantium aliquid aspernatur doloremque ipsa iusto
          laudantium mollitia nobis tempore veritatis voluptatibus.
        </p>
      </Layout>
    </div>
  );
};

export default Instruction;
