import FaqAccordionItem from '@/components/accordions/faq-accordion-list'
import SectionContainer from '@/components/containers/section-container'
import { Accordion } from '@/components/ui/accordion'
import { AccordionItemType } from '@/components/accordions/accordion'
import SectionHeader from '@/components/headers/section-header'

export const leftColumnItems: Array<AccordionItemType> = [
  {
    title: 'What is SeemaS and who is it for?',
    content: 'SeemaS is an AI-driven tax compliance platform as a first  focus is automating and simplifying transfer pricing for businesses. It is designed for companies of all sizes, with particular benefits for multinational corporations (MNCs) that need to manage complex international tax documentation and compliance.',
  },
  {
    title: 'How does SeemaS use AI in valuation and compliance?',
    content: 'SeemaS uses advanced AI to automate the creation, review, and management of transfer pricing documentation. The platform streamlines data collection, economic analysis, and report generation, ensuring compliance with global tax regulations while reducing manual effort and the risk of errors.',
  },
  {
    title: 'Can I benchmark my valuation results against other companies?',
    content: 'SeemaS’s automation and analytics features are designed to help users compare and benchmark their transfer pricing results, supporting informed decision-making and regulatory alignment. For detailed benchmarking capabilities, contact SeemaS directly.',
  },
]

export const rightColumnItems: Array<AccordionItemType> = [
  {
    title: 'Do I need financial or tax expertise to use SeemaS tools?',
    content: 'No, SeemaS is built to be user-friendly and accessible, guiding users through the transfer pricing process and reducing the need for deep financial or tax expertise. The automation handles technical compliance, allowing users to focus on business strategy.',
  },
  {
    title: 'Is my data secure with SeemaS?',
    content: 'Yes. Security is a core design principle of SeemaS, especially with Project Mercury. The platform is being developed with high security standards, including robust data protection and privacy controls, tailored to meet the needs of large multinational enterprises.',
  },
  {
    title: 'What is Project Mercury and how do I get started?',
    content: 'Project Mercury is SeemaS’s secure platform that automates transfer pricing documentation. It is engineered for high security and can be customized for large MNCs. To get started, visit the SeemaS website or contact the team for onboarding and a demonstration of Project Mercury’s capabilities.',
  },
]

const FaqSection = () => {
  return (
    <section className='bg-zinc-50 md:min-h-[1080px]'>
      <SectionContainer className='py-32 xl:py-[200px]'>

        <SectionHeader
          title="Frequently Asked Questions"
          description="Quick answers to help you get started with SeemaS."
          titleClassName='text-h4 md:text-h3'
          descriptionClassName='text-body-m'
          className='mb-14'
        />

        <Accordion type='multiple' className='grid grid-cols-1 xl:grid-cols-2 gap-3'>
          <div className='flex flex-col gap-3'>
            {leftColumnItems.map((item, index) => (
              <FaqAccordionItem key={index} value={`left-item-${index}`} title={item.title} content={item.content} />
            ))}
          </div>
          <div className='flex flex-col gap-3'>
            {rightColumnItems.map((item, index) => (
              <FaqAccordionItem key={index} value={`right-item-${index}`} title={item.title} content={item.content} />
            ))}
          </div>
        </Accordion>

      </SectionContainer>
    </section>
  )
}

export default FaqSection