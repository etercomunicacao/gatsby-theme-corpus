import React from 'react';

// Libraries
import * as Yup from 'yup';
import "yup-phone";
import { Formik, Form, Field } from 'formik';


const FisioSchema = Yup.object().shape({
  nome: Yup.string()
    .min(2, 'Muito curto')
    .max(50, 'Extenso demais')
    .required('Campo obrigatório'),
  sobrenome: Yup.string()
    .min(2, 'Muito curto')
    .max(50, 'Extenso demais')
    .required('Campo obrigatório'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
  phone: Yup.string()
    .phone('BR'),
  unidade: Yup.string()
      .oneOf(['Venâncio', 'Headway', 'tanto faz']),
  turno: Yup.string()
      .oneOf(['manhã', 'tarde'])
      .required('Por favor, indique um turno de sua preferência para ser atendido(a).')
    
});

const FisioOrtoForm = () => {

  return (
    <div>
      <Formik
        initialValues={{
          nome: '',
          sobrenome: '',
          email: 'exemplo@provedor.com.br',
          phone: '(61) 99999-5555',
          unidade: 'Selecione uma unidade',
          turno: 'Selecione um turno',
          mensagem: 'Caso deseje adicionar alguma informação, por favor, utilize este campo.',
        }}
        validationSchema={FisioSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="form fisio fisio_orto" >
            <div className="intro">
              <h2>Fisioterapia Ortopédica</h2>
              <p>Nulla dolor do sint velit occaecat magna veniam do. Adipisicing duis veniam adipisicing veniam culpa excepteur amet ullamco. Cillum adipisicing est velit et. Irure adipisicing Lorem id officia irure enim laborum. Id amet ad reprehenderit consequat cupidatat laborum fugiat excepteur reprehenderit fugiat aliquip.</p>
            </div>
            
            <label for="nome" className="nome">
              <span>Nome</span>
              <Field name="nome" />
              {errors.nome && touched.nome ? (
                <div class="validacao">{errors.nome}</div>
              ) : null}
            </label>
            
            <label for="sobrenome">Sobrenome
              <Field name="sobrenome" />
              {errors.sobrenome && touched.sobrenome ? (
              <div class="validacao">{errors.sobrenome}</div>
              ) : null}
            </label>
            
            <label for="email">E-mail
              <Field name="email" type="email" />
              {errors.email && touched.email ? <div class="validacao">{errors.email}</div> : null}
            </label>

            <label for="phone">Telefone
              <Field name="phone" type="phone" />
              {errors.phone && touched.phone ? (
              <div class="validacao">{errors.phone}</div>
              ) : null}
            </label>

            <label for="unidade" className="select unidade">Indique a unidade de preferência unidade de preferência
              <Field name="unidade" type="selectlist" as="select" placeholder="Selecione uma opção">
                <option value="" selected="selected" className="text-gray-500">Selecione uma opção</option>
                <option value="Venâncio">Venâncio Shopping, Asa Sul</option>
                <option value="Headway">Academia Headway, Lago Norte</option>
                <option value="tanto faz">Tanto faz</option>
              </Field>
              {errors.turno && touched.turno ? (
              <div class="validacao">{errors.turno}</div>
              ) : null}
            </label>

            <label for="turno" className="select turno">Em que turno você quer seu atendimento?
              <Field name="turno" type="selectlist" as="select" placeholder="Selecione uma opção">
                <option value="" selected="selected" className="text-gray-500">Selecione uma opção</option>
                <option value="manhã">Manhã</option>
                <option value="tarde">Tarde</option>
              </Field>
              {errors.turno && touched.turno ? (
              <div class="validacao">{errors.turno}</div>
              ) : null}
            </label>
            <h3 className="adicionais font-display text-lg text-corpus-grayish-blue-700 w-full border-b border-corpus-grayish-blue-300 mb-3">Informações adicionais</h3>
            <label className="encaminhamento">
              <Field name="encaminhamento" type="checkbox" />
              <span className="ml-2">Assinale esta opção se você estiver seguindo encaminhamento médico</span>
            </label>
                        
            <label for="mensagem">Observações
              <Field name="mensagem" type="mensagem" component="textarea" rows="5" />
              {errors.mensagem && touched.mensagem ? (
              <div class="validacao">{errors.mensagem}</div>
              ) : null}
            </label>

            <button type="submit" className="submit">Enviar</button>

          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FisioOrtoForm;