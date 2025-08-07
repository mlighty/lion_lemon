import React, { useState } from 'react';
import { formFieldsData } from '../../data/formFieldsData';

export default function ContactForm() {
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
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="box-border">
      <div className="box-border"></div>
      <div className="box-border">
        <p className="box-border"></p>
      </div>
      <form className="box-border" onSubmit={handleSubmit}>
        <div className="box-border">
          <div className="box-border gap-x-3 grid grid-cols-[repeat(12,1fr)] gap-y-4 w-full">
            <fieldset className="box-border col-end-[-1] col-start-1 min-w-0 bg-[position:0px_0px] p-0">
              <div className="box-border flex flex-wrap gap-y-4 md:gap-y-[normal]">
                <span className="box-border block basis-full grow-0 shrink-0 pr-0 md:basis-[0%] md:grow md:shrink md:pr-1.5">
                  <input 
                    type="text" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name*" 
                    className="text-neutral-900 bg-slate-50 box-border h-[45px] leading-9 max-w-full min-h-8 w-full border border-neutral-300 p-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid md:leading-[27px] md:min-h-0" 
                  />
                </span>
                <span className="box-border block basis-full grow-0 shrink-0 pl-0 md:basis-[0%] md:grow md:shrink md:pl-1.5">
                  <input 
                    type="text" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name*" 
                    className="text-neutral-900 bg-slate-50 box-border h-[45px] leading-9 max-w-full min-h-8 w-full border border-neutral-300 p-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid md:leading-[27px] md:min-h-0" 
                  />
                </span>
              </div>
            </fieldset>
            <div className="box-border col-end-[-1] col-start-1 md:col-end-auto md:col-start-[span_6]">
              <div className="box-border">
                <input 
                  name="phone" 
                  type="tel" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone*" 
                  className="text-neutral-900 bg-slate-50 box-border h-[45px] leading-9 max-w-full min-h-8 w-full border border-neutral-300 p-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid md:leading-[27px] md:min-h-0" 
                />
              </div>
            </div>
            <div className="box-border col-end-[-1] col-start-1 md:col-end-auto md:col-start-[span_6]">
              <div className="box-border">
                <input 
                  name="email" 
                  type="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email*" 
                  className="text-neutral-900 bg-slate-50 box-border h-[45px] leading-9 max-w-full min-h-8 w-full border border-neutral-300 p-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid md:leading-[27px] md:min-h-0" 
                />
              </div>
            </div>
            <div className="box-border col-end-[-1] col-start-1 md:col-end-auto md:col-start-[span_4]">
              <div className="box-border">
                <input 
                  name="year" 
                  type="text" 
                  value={formData.year}
                  onChange={handleInputChange}
                  placeholder="Year*" 
                  className="text-neutral-900 bg-slate-50 box-border h-[45px] leading-9 max-w-full min-h-8 w-full border border-neutral-300 p-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid md:leading-[27px] md:min-h-0" 
                />
              </div>
            </div>
            <div className="box-border col-end-[-1] col-start-1 md:col-end-auto md:col-start-[span_4]">
              <div className="box-border">
                <input 
                  name="make" 
                  type="text" 
                  value={formData.make}
                  onChange={handleInputChange}
                  placeholder="Make*" 
                  className="text-neutral-900 bg-slate-50 box-border h-[45px] leading-9 max-w-full min-h-8 w-full border border-neutral-300 p-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid md:leading-[27px] md:min-h-0" 
                />
              </div>
            </div>
            <div className="box-border col-end-[-1] col-start-1 md:col-end-auto md:col-start-[span_4]">
              <div className="box-border">
                <input 
                  name="model" 
                  type="text" 
                  value={formData.model}
                  onChange={handleInputChange}
                  placeholder="Model*" 
                  className="text-neutral-900 bg-slate-50 box-border h-[45px] leading-9 max-w-full min-h-8 w-full border border-neutral-300 p-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid md:leading-[27px] md:min-h-0" 
                />
              </div>
            </div>
            <div className="box-border col-start-[span_12]">
              <div className="box-border">
                <select 
                  name="state" 
                  value={formData.state}
                  onChange={handleInputChange}
                  className="text-neutral-900 bg-slate-50 h-[45px] leading-[normal] max-w-full w-full border-neutral-300 p-2 rounded-bl rounded-br rounded-tl rounded-tr"
                >
                  {formFieldsData.stateOptions.map((option) => (
                    <option key={option.value} value={option.value} className="items-center box-border gap-x-[9px] min-h-6 min-w-6 gap-y-[9px]">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="box-border col-end-[-1] col-start-1">
              <div className="box-border">
                <textarea 
                  name="description" 
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Description of Problem*" 
                  className="text-neutral-900 bg-slate-50 box-border h-48 leading-[27px] max-h-[100px] max-w-full w-full border-neutral-300 p-2 rounded-bl rounded-br rounded-tl rounded-tr md:leading-[normal]"
                ></textarea>
              </div>
            </div>
            <div className="text-white text-xs box-border col-start-[span_12] leading-[18px] text-left">
              By submitting this form, you expressly consent to receive emails, telephone calls, and SMS text messages from our law firm, including those made using an automatic telephone dialing system (auto-dialer), artificial intelligence (AI), and/or pre-recorded artificial voice at any time. These communications are intended to offer timely consultation about your potential case. By sharing your information, you consent to being contacted for this purpose, even if your phone number is listed on a federal or state Do-Not-Call list. Your consent is not necessary to obtain legal services from our firm. Message and data rates may apply. You may revoke your consent by replying 'Stop' to any message.
            </div>
            <div className="absolute box-border hidden col-end-[-1] col-start-1 left-[-9000px]">
              <label className="text-base font-bold box-border inline-block leading-6 mb-2">Email</label>
              <div className="text-[15px] box-border clear-both leading-[22.5px] w-full mt-[9.008px] pt-[13px] pb-4">This field is for validation purposes and should be left unchanged.</div>
              <div className="box-border">
                <input name="input_23" type="text" value="" className="text-neutral-900 bg-slate-50 box-border h-[45px] leading-9 max-w-full min-h-8 w-full border border-neutral-300 p-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid md:leading-[27px] md:min-h-0" />
              </div>
            </div>
          </div>
        </div>
        <div className="box-border flex mt-1.5 pt-6 pb-4">
          <input type="submit" value="get started" className="text-neutral-900 font-bold self-end bg-yellow-400 bg-size-[0px] box-border block leading-9 min-h-8 text-center uppercase text-nowrap border-yellow-400 mb-2 px-6 py-3 border-solid font-oswald md:leading-[27px] md:min-h-[auto]" />
          <input type="hidden" name="gform_ajax" value="form_id=3&title=&description=1&tabindex=0&theme=gravity-theme&styles=[]&hash=e421aad4d097c8bf86b4871433462898" className="self-end bg-transparent box-border hidden leading-9 min-h-8 ml-2 mb-2 p-0 md:leading-[27px] md:min-h-0" />
          <input type="hidden" name="gform_submission_method" value="iframe" className="self-end bg-transparent box-border hidden leading-9 min-h-8 ml-2 mb-2 p-0 md:leading-[27px] md:min-h-0" />
          <input type="hidden" name="gform_theme" value="gravity-theme" className="self-end bg-transparent box-border hidden leading-9 min-h-8 ml-2 mb-2 p-0 md:leading-[27px] md:min-h-0" />
          <input type="hidden" name="gform_style_settings" value="[]" className="self-end bg-transparent box-border hidden leading-9 min-h-8 ml-2 mb-2 p-0 md:leading-[27px] md:min-h-0" />
          <input type="hidden" name="is_submit_3" value="1" className="self-end bg-transparent box-border hidden leading-9 min-h-8 ml-2 mb-2 p-0 md:leading-[27px] md:min-h-0" />
          <input type="hidden" name="gform_submit" value="3" className="self-end bg-transparent box-border hidden leading-9 min-h-8 ml-2 mb-2 p-0 md:leading-[27px] md:min-h-0" />
          <input type="hidden" name="gform_unique_id" value="" className="self-end bg-transparent box-border hidden leading-9 min-h-8 ml-2 mb-2 p-0 md:leading-[27px] md:min-h-0" />
          <input type="hidden" name="state_3" className="self-end bg-transparent box-border hidden leading-9 min-h-8 ml-2 mb-2 p-0 md:leading-[27px] md:min-h-0" />
          <input type="hidden" name="gform_target_page_number_3" value="0" className="self-end bg-transparent box-border hidden leading-9 min-h-8 ml-2 mb-2 p-0 md:leading-[27px] md:min-h-0" />
          <input type="hidden" name="gform_source_page_number_3" value="1" className="self-end bg-transparent box-border hidden leading-9 min-h-8 ml-2 mb-2 p-0 md:leading-[27px] md:min-h-0" />
          <input type="hidden" name="gform_field_values" value="" className="self-end bg-transparent box-border hidden leading-9 min-h-8 ml-2 mb-2 p-0 md:leading-[27px] md:min-h-0" />
        </div>
      </form>
      <iframe src="about://blank" name="gform_ajax_frame_3" title="This iframe contains the logic required to handle Ajax powered Gravity Forms." className="box-border hidden h-0 w-0"></iframe>
    </div>
  );
}
