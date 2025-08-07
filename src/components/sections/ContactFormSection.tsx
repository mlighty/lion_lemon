import React, { useState } from 'react';
import { formFieldsData } from '../../data/formFieldsData';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    year: '',
    make: '',
    model: '',
    state: '',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white box-border clear-both flow-root max-w-full w-full mx-auto px-[19.98px] py-[37.5px] md:w-auto md:p-[60px] before:accent-auto before:box-border before:clear-both before:text-zinc-600 before:block before:text-lg before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro after:accent-auto after:box-border after:clear-both after:text-zinc-600 after:block after:text-lg after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro">
      <div className="box-border mx-auto">
        <div className="box-border clear-both gap-x-9 flex flex-wrap max-w-full gap-y-9 w-[345px] mx-auto md:flex-nowrap md:w-[1080px]">
          <div className="box-border basis-full grow break-words mb-[19.8px] md:basis-0 md:mb-0">
            <h2 className="text-blue-900 text-[26px] box-border clear-both leading-[28.6px] break-words mb-[19.8px] font-oswald md:text-[55px] md:leading-[60.5px] md:mb-[30px]">
              PICK A LEMON LAW FIRM<br className="text-[26px] box-border leading-[28.6px] break-words md:text-[55px] md:leading-[60.5px]" />
              WITH A WINNING RECORD
            </h2>
            <p className="box-border break-words my-[19.8px] md:my-[30px]">
              Schedule a Free Case Evaluation Now by Filling Out the Form Below or Contacting Our Team at{' '}
              <a href="tel://1.877.891.1876" className="relative text-cyan-600 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[100%_100%] box-border break-words bg-right">877.891.1876.</a>
            </p>
            <div className="box-border break-words my-[19.8px] md:my-[30px]">
              <div className="box-border break-words"></div>
              <div className="box-border break-words">
                <p className="box-border break-words"></p>
              </div>
              <form className="box-border break-words" onSubmit={handleSubmit}>
                <div className="box-border break-words">
                  <div className="box-border gap-x-0 grid grid-cols-[repeat(12,1fr)] break-words gap-y-4 w-full md:gap-x-[2%]">
                    <fieldset className="box-border col-end-[-1] col-start-1 min-w-0 break-words bg-[position:0px_0px] p-0">
                      <div className="box-border flex flex-wrap break-words gap-y-4 md:gap-y-[normal]">
                        <span className="box-border block basis-full grow-0 shrink-0 break-words pr-0 md:basis-[0%] md:grow md:shrink md:pr-[1%]">
                          <input 
                            type="text" 
                            name="firstName" 
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="First Name*" 
                            className="text-neutral-900 bg-slate-50 box-border h-[45px] leading-9 max-w-full min-h-8 break-words w-full border border-neutral-300 p-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid md:leading-[27px] md:min-h-0" 
                          />
                        </span>
                        <span className="box-border block basis-full grow-0 shrink-0 break-words pl-0 md:basis-[0%] md:grow md:shrink md:pl-[1%]">
                          <input 
                            type="text" 
                            name="lastName" 
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Last Name*" 
                            className="text-neutral-900 bg-slate-50 box-border h-[45px] leading-9 max-w-full min-h-8 break-words w-full border border-neutral-300 p-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid md:leading-[27px] md:min-h-0" 
                          />
                        </span>
                      </div>
                    </fieldset>
                    <div className="box-border col-end-[-1] col-start-1 break-words md:col-end-auto md:col-start-[span_6]">
                      <div className="box-border break-words">
                        <input 
                          name="phone" 
                          type="tel" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone*" 
                          className="text-neutral-900 bg-slate-50 box-border h-[45px] leading-9 max-w-full min-h-8 break-words w-full border border-neutral-300 p-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid md:leading-[27px] md:min-h-0" 
                        />
                      </div>
                    </div>
                    <div className="box-border col-end-[-1] col-start-1 break-words md:col-end-auto md:col-start-[span_6]">
                      <div className="box-border break-words">
                        <input 
                          name="email" 
                          type="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email*" 
                          className="text-neutral-900 bg-slate-50 box-border h-[45px] leading-9 max-w-full min-h-8 break-words w-full border border-neutral-300 p-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid md:leading-[27px] md:min-h-0" 
                        />
                      </div>
                    </div>
                    <div className="box-border col-end-[-1] col-start-1 break-words md:col-end-auto md:col-start-[span_4]">
                      <div className="box-border break-words">
                        <input 
                          name="year" 
                          type="text" 
                          value={formData.year}
                          onChange={handleInputChange}
                          placeholder="Year*" 
                          className="text-neutral-900 bg-slate-50 box-border h-[45px] leading-9 max-w-full min-h-8 break-words w-full border border-neutral-300 p-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid md:leading-[27px] md:min-h-0" 
                        />
                      </div>
                    </div>
                    <div className="box-border col-end-[-1] col-start-1 break-words md:col-end-auto md:col-start-[span_4]">
                      <div className="box-border break-words">
                        <input 
                          name="make" 
                          type="text" 
                          value={formData.make}
                          onChange={handleInputChange}
                          placeholder="Make*" 
                          className="text-neutral-900 bg-slate-50 box-border h-[45px] leading-9 max-w-full min-h-8 break-words w-full border border-neutral-300 p-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid md:leading-[27px] md:min-h-0" 
                        />
                      </div>
                    </div>
                    <div className="box-border col-end-[-1] col-start-1 break-words md:col-end-auto md:col-start-[span_4]">
                      <div className="box-border break-words">
                        <input 
                          name="model" 
                          type="text" 
                          value={formData.model}
                          onChange={handleInputChange}
                          placeholder="Model*" 
                          className="text-neutral-900 bg-slate-50 box-border h-[45px] leading-9 max-w-full min-h-8 break-words w-full border border-neutral-300 p-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid md:leading-[27px] md:min-h-0" 
                        />
                      </div>
                    </div>
                    <div className="box-border col-start-[span_12] break-words">
                      <div className="box-border break-words">
                        <select 
                          name="state" 
                          value={formData.state}
                          onChange={handleInputChange}
                          className="text-neutral-900 bg-slate-50 h-[45px] leading-[normal] max-w-full break-words w-full border-neutral-300 p-2 rounded-bl rounded-br rounded-tl rounded-tr"
                        >
                          {formFieldsData.stateOptions.map((option) => (
                            <option key={option.value} value={option.value} className="items-center box-border gap-x-[9px] min-h-6 min-w-6 break-words gap-y-[9px]">
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="box-border col-end-[-1] col-start-1 break-words">
                      <div className="box-border break-words">
                        <textarea 
                          name="description" 
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="Description of Problem*" 
                          className="text-neutral-900 bg-slate-50 box-border h-48 leading-[27px] max-h-[100px] max-w-full w-full border-neutral-300 p-2 rounded-bl rounded-br rounded-tl rounded-tr md:leading-[normal]"
                        ></textarea>
                      </div>
                    </div>
                    <div className="text-xs box-border col-start-[span_12] leading-[18px] break-words text-left">
                      By submitting this form, you expressly consent to receive emails, telephone calls, and SMS text messages from our law firm, including those made using an automatic telephone dialing system (auto-dialer), artificial intelligence (AI), and/or pre-recorded artificial voice at any time. These communications are intended to offer timely consultation about your potential case. By sharing your information, you consent to being contacted for this purpose, even if your phone number is listed on a federal or state Do-Not-Call list. Your consent is not necessary to obtain legal services from our firm. Message and data rates may apply. You may revoke your consent by replying 'Stop' to any message.
                    </div>
                    <div className="absolute box-border hidden col-end-[-1] col-start-1 left-[-9000px] break-words">
                      <label className="text-base font-bold box-border inline-block leading-6 break-words mb-2">Comments</label>
                      <div className="text-[15px] box-border clear-both leading-[22.5px] break-words w-full mt-[9.008px] pt-[13px] pb-4">This field is for validation purposes and should be left unchanged.</div>
                      <div className="box-border break-words">
                        <input name="input_23" type="text" value="" className="text-neutral-900 bg-slate-50 box-border h-[45px] leading-9 max-w-full min-h-8 break-words w-full border border-neutral-300 p-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid md:leading-[27px] md:min-h-0" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-border flex justify-start break-words mt-1.5 py-4">
                  <input type="submit" value="get started" className="text-neutral-900 font-bold self-end bg-yellow-400 bg-size-[0px] box-border block leading-9 min-h-8 break-words text-center uppercase text-nowrap border-yellow-400 mb-2 px-6 py-3 border-solid font-oswald md:leading-[27px] md:min-h-[auto]" />
                  <input type="hidden" name="gform_ajax" value="form_id=3&title=&description=1&tabindex=0&theme=gravity-theme&styles=[]&hash=e421aad4d097c8bf86b4871433462898" className="self-end bg-transparent box-border hidden leading-9 min-h-8 break-words ml-2 mb-2 p-0 md:leading-[27px] md:min-h-0" />
                  <input type="hidden" name="gform_submission_method" value="iframe" className="self-end bg-transparent box-border hidden leading-9 min-h-8 break-words ml-2 mb-2 p-0 md:leading-[27px] md:min-h-0" />
                  <input type="hidden" name="gform_theme" value="gravity-theme" className="self-end bg-transparent box-border hidden leading-9 min-h-8 break-words ml-2 mb-2 p-0 md:leading-[27px] md:min-h-0" />
                  <input type="hidden" name="gform_style_settings" value="[]" className="self-end bg-transparent box-border hidden leading-9 min-h-8 break-words ml-2 mb-2 p-0 md:leading-[27px] md:min-h-0" />
                  <input type="hidden" name="is_submit_3" value="1" className="self-end bg-transparent box-border hidden leading-9 min-h-8 break-words ml-2 mb-2 p-0 md:leading-[27px] md:min-h-0" />
                  <input type="hidden" name="gform_submit" value="3" className="self-end bg-transparent box-border hidden leading-9 min-h-8 break-words ml-2 mb-2 p-0 md:leading-[27px] md:min-h-0" />
                  <input type="hidden" name="gform_unique_id" value="" className="self-end bg-transparent box-border hidden leading-9 min-h-8 break-words ml-2 mb-2 p-0 md:leading-[27px] md:min-h-0" />
                  <input type="hidden" name="state_3" className="self-end bg-transparent box-border hidden leading-9 min-h-8 break-words ml-2 mb-2 p-0 md:leading-[27px] md:min-h-0" />
                  <input type="hidden" name="gform_target_page_number_3" value="0" className="self-end bg-transparent box-border hidden leading-9 min-h-8 break-words ml-2 mb-2 p-0 md:leading-[27px] md:min-h-0" />
                  <input type="hidden" name="gform_source_page_number_3" value="1" className="self-end bg-transparent box-border hidden leading-9 min-h-8 break-words ml-2 mb-2 p-0 md:leading-[27px] md:min-h-0" />
                  <input type="hidden" name="gform_field_values" value="" className="self-end bg-transparent box-border hidden leading-9 min-h-8 break-words ml-2 mb-2 p-0 md:leading-[27px] md:min-h-0" />
                </div>
              </form>
            </div>
            <iframe src="about://blank" name="gform_ajax_frame_3" title="This iframe contains the logic required to handle Ajax powered Gravity Forms." className="box-border hidden h-0 break-words w-0 my-[19.8px] md:my-[30px]"></iframe>
          </div>
          <div className="box-border hidden basis-full grow min-h-0 break-words md:block md:basis-0 md:min-h-[auto]">
            <figure className="box-border break-words text-center">
              <img src="https://c.animaapp.com/me11n5bffLhWIi/assets/70.webp" alt="" sizes="(max-width: 583px) 100vw, 583px" className="aspect-[auto_583_/_820] box-border max-w-full break-words align-bottom w-[583px]" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
