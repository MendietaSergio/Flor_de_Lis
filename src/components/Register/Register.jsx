import { useState } from "react";
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom";
import Button from "../Button/Button";
import validations from "../../validations/register"
import {Input} from "../Input/Input"

export const Register = ({className}) =>{
    const [loading, setLoading] = useState(true);
    const {register, handleSubmit,
    formState:{errors}} = useForm();
    const history = useHistory();
    
    const onSubmit = async (data) =>{
        try{
            setLoading(false)
            // const response = await ACA HACER CONEXION A BASE DE DATOs
            history.push('/')
        }catch(error){
            if(error){
                console.log("Error", error);
            }
        } finally{
            setLoading(false)
        }
    }
    
    return (
        <div className={`container p-4 d-flex justify-content-center ${className}`}>
          <div className="row justify-content-center shadow-lg p-3 mb-5 bg-body rounded">
            <div className="col-12 col-md-8">
              <h3 className="text-center pb-3">Registrate</h3>
            </div>
            <div className="col-12 col-md-9">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  className="col-12"
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="Email"
                  register={register}
                  validation={validations.email}
                  error={errors.email}
                />
    
                <Input
                  className="col-12"
                  name="pass"
                  type="password"
                  label="Contraseña"
                  placeholder="Contraseña"
                  register={register}
                  validation={validations.pass}
                  error={errors.pass}
                />
    
                <Button type="submit" text="ENVIAR" loading={loading} />
              </form>
            </div>
          </div>
        </div>
      );

}