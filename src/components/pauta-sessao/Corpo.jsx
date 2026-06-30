import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    value: "item-1",
    trigger: "How do I reset my password?",
    content:
      "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.",
  },
  {
    value: "item-2",
    trigger: "Can I change my subscription plan?",
    content:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
  },
  {
    value: "item-3",
    trigger: "What payment methods do you accept?",
    content:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
  },
]

const Corpo = () => {
  const [dadosSessao, setDadosSessao] = useState([]);

  const fetchDadosEventosLegislativos = async (sessao) => {
    try{
        const response = await fetch(`https://www6g.senado.leg.br/dados-eventos-legislativos/resources/sessao/recuperar-sessao?codigoSessao=${sessao}`)
        const data = response.data;
        if (data){
          setDadosSessao(data);
        }
    } catch(e) {
        console.log(e);
    }
}

  useEffect(() => {
    fetchDadosEventosLegislativos(550750)
  }, [])
  
  console.log(dadosSessao);
  return (
    <Accordion type="multiple" defaultValue={[dadosSessao.emAndamento]} className="w-[100%]">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default Corpo