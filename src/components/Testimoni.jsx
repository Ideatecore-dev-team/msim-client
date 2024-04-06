import React from "react";

function Testimoni() {
  return (
    <>
      <div className="testimoni">
        <h1 className="text-center pt-20 font-bold text-4xl w-full pb-20">
          🔥 Apa Kata Mereka?
        </h1>
        <div className="flex justify-center max-w-7xl mx-auto flex-wrap gap-10 pb-20">
          <div className="card flex flex-col bg-white px-6 pt-6 py-16 gap-6 rounded">
            <div className="profile flex flex-col gap-4 items-center text-center">
              <div className="pic-profile w-14 h-14 rounded-full overflow-hidden flex items-center justify-center">
                <div>
                  <img
                    src="../../public/images/profile1.jpeg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <p>Bunda Annisa Rahmawati</p>
                <p>Orang tua dari Ananda Mecca</p>
              </div>
            </div>
            <hr className=" stroke-slate-400 stroke-2" />
            <div className="message">
              <p className=" font-extralight leading-5 text-sm">
                ”Percaya banget deh pokoknya sama Skyshare Academy”
              </p>
            </div>
          </div>
          <div className="card flex flex-col bg-white px-6 pt-6 py-16 gap-6 rounded">
            <div className="profile flex flex-col gap-4 items-center text-center">
              <div className="pic-profile w-14 h-14 rounded-full overflow-hidden flex items-center justify-center">
                <div>
                  <img
                    src="../../public/images/profile2.jpeg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <p>Nailah Farah Fadhilah</p>
                <p>Member group of New Orbit</p>
              </div>
            </div>
            <hr className=" stroke-slate-400 stroke-2" />
            <div className="message">
              <p className=" font-extralight leading-5 text-sm">
                “Aku sangat senang, seru banget bisa kenal sama kakak-kakak di
                Skyshare Academy dan dapet mentor yang alhamdulillah cocok dan
                bisa main bareng teman-teman sefrekuensi, nambah ilmu, dan buat
                aku tetap menjaga apa yang harus jaga.”
              </p>
            </div>
          </div>
          <div className="card flex flex-col bg-white px-6 pt-6 py-16 gap-6 rounded">
            <div className="profile flex flex-col gap-4 items-center text-center">
              <div className="pic-profile w-14 h-14 rounded-full overflow-hidden flex items-center justify-center">
                <div>
                  <img
                    src="../../public/images/profile3.jpeg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <p>Muhammad Naufal Laksita</p>
                <p>Member group of Legacy</p>
              </div>
            </div>
            <hr className=" stroke-slate-400 stroke-2" />
            <div className="message">
              <p className=" font-extralight leading-5 text-sm">
                “Setelah mengikuti MSIM Mentoring Consulting terutama program
                Skyshare Academy saya merasa memiliki teman yang satu frekuensi.
                Teman-teman di group bukan hanya menjadi partner untuk saling
                berbagi cerita namun juga sebagai penjaga keimanan serta
                kesadaran saya sebagai manusia. ”
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimoni;
