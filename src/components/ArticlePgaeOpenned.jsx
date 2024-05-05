import React from "react";
import Image1 from "../../public/images/Rectangle 33.png";
import Image2 from "../../public/images/Rectangle 34.png";
import Image3 from "../../public/images/Rectangle 35.png";
import ArrowLeft from "../../public/images/mascot-icons/Arrow - Down 3.png";

function ArticlePageOpenned() {
  return (
    <>
      <div className="hero flex background border-t-2 border-black flex-col items-center self-stretch">
        <div className="content h-full pb-20 mt-10">
          <h1 className=" headline-1 text-center">
            Bagaimana Mentorship Membakar Inovasi
          </h1>
          <div className="flex w-full mt-10 justify-between">
            <div className="">
              <p className="paragraph">Author:</p>
              <h4 className="headline-4">Muhammad Nusa A.</h4>
            </div>
            <div className="">
              <p className="paragraph pl-10">Category:</p>
              <h4 className="text-white flex justify-center items-center font-bold bg-red-300 px-2 py-1 rounded-full">
                Mentorship
              </h4>
            </div>
          </div>
          <h4 className="headline-4 mt-10 -ml-2">
            Menurut kalian apasih yang memberikan inovasi dalam mentoring?
          </h4>
          <p className="paragraph -ml-2">
            Dalam lanskap kreativitas dan inovasi, mentorship adalah kunci untuk
            membuka potensi tersembunyi. Lebih dari sekadar memberikan
            bimbingan, mentorship menghidupkan nyala semangat inovasi dalam
            setiap individu yang dilayani. Dari ceruk penelitian ilmiah hingga
            panggung seni kreatif, mentorship menjadi pendorong utama di balik
            lahirnya ide-ide baru yang revolusioner. Melalui interaksi yang
            mendalam antara mentor dan mentee, gagasan-gagasan segar diberi
            ruang untuk tumbuh dan berkembang, menghasilkan terobosan yang
            mengubah paradigma. Seiring dengan dorongan dari mentor, mentee
            diberdayakan untuk menjelajahi batas-batas kreativitas mereka,
            menghadirkan solusi-solusi inovatif untuk tantangan-tantangan
            kompleks yang dihadapi dunia saat ini. Dengan setiap pertemuan,
            setiap diskusi, dan setiap dorongan, mentorship membakar api inovasi
            yang membawa peradaban manusia ke puncak kejayaannya. <br />
            <br />
            Dalam dunia yang terus berubah dengan cepat, mentorship tidak hanya
            menyediakan arahan, tetapi juga menciptakan lingkungan yang
            mendukung bagi eksplorasi kreatif. Dengan memberikan ruang bagi
            mentee untuk mengemukakan ide-ide mereka tanpa takut dihakimi atau
            diremehkan, mentorship menciptakan sebuah tempat di mana inovasi
            dapat mekar dengan bebas. Mentor tidak hanya menjadi sumber
            inspirasi, tetapi juga menjadi mitra dalam perjalanan pencapaian
            yang luar biasa. Mereka mendengarkan dengan telinga yang penuh
            perhatian, mengajukan pertanyaan yang menantang, dan memberikan
            umpan balik yang konstruktif, mendorong mentee untuk terus mencari
            solusi-solusi yang baru dan menciptakan terobosan yang berdampak.{" "}
            <br />
            <br />
            Dalam era digital yang terus berkembang, mentorship juga berperan
            penting dalam menghadapi tantangan-tantangan baru yang muncul,
            seperti perubahan teknologi, transformasi industri, dan kompleksitas
            globalisasi. Melalui mentorship, pelajar dapat mengatasi
            ketidakpastian yang terkait dengan revolusi digital, dengan mentor
            yang membimbing mereka melalui kemajuan teknologi dan mendorong
            mereka untuk mengadopsi pendekatan inovatif dalam menghadapi
            perubahan yang cepat. Selain itu, mentorship juga memfasilitasi
            transfer pengetahuan lintas-generasi, memungkinkan generasi yang
            lebih muda untuk memanfaatkan pengalaman dan wawasan generasi
            sebelumnya dalam mengatasi tantangan-tantangan masa depan. Dengan
            demikian, mentorship membawa harapan dan optimisme dalam menghadapi
            masa depan yang penuh dengan ketidakpastian, sambil m
          </p>
          <div className="w-full flex justify-center gap-4 mt-10">
            <img className="w-80" src={Image1} alt="" />
            <img className="w-80" src={Image2} alt="" />
            <img className="w-80" src={Image3} alt="" />
          </div>
          <p className="paragraph mt-10 -ml-2">
            Selain itu, mentorship juga memainkan peran penting dalam membangun
            komunitas inovatif yang kuat. Melalui kolaborasi antara mentor dan
            mentee, serta dengan melibatkan rekan-rekan sejawat dan pemangku
            kepentingan lainnya, mentorship menciptakan lingkungan di mana
            ide-ide dapat bertukar, dipertukarkan, dan diperkuat. Dalam
            komunitas yang didukung oleh mentorship, individu-individu saling
            memotivasi dan memberi dukungan satu sama lain, menciptakan
            gelombang kekuatan kreatif yang meluas dan berkelanjutan. Dengan
            demikian, mentorship tidak hanya membantu mempercepat laju inovasi,
            tetapi juga memperkuat fondasi bagi pertumbuhan dan kemajuan jangka
            panjang
          </p>
          <div className="w-full flex justify-center mt-10">
            <a
              className="px-5 py-4 items-center gap-2 bg-primary-1 flex hover:bg-primary-2 rounded-lg"
              href="#"
            >
              <p className="text-white font-semibold">Learn more</p>
              <img className="w-6 -rotate-90" src={ArrowLeft} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticlePageOpenned;
