interface ContactSectionProps {}

function ContactSection({}: ContactSectionProps) {
  return (
    <section className='py-28 bg-bgDark' id='contact'>
      <div className='container'>
        <div className='mb-20'>
          <h3 className='text-5xl font-bold text-center'>Contact</h3>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
