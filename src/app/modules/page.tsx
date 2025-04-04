import Image from "next/image";
import module0 from "../../../public/modules/0.png";
import module1 from "../../../public/modules/1.png";
import module2 from "../../../public/modules/2.png";
import module3 from "../../../public/modules/3.png";
import module4 from "../../../public/modules/4.png";
import module5 from "../../../public/modules/5.png";
import module6 from "../../../public/modules/6.png";
import module7 from "../../../public/modules/7.png";

const page = () => {
  return (
    <div className="mt-64 mb-24">
      <section className="flex flex-col w-[1200px] mb-24">
        <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row justify-between items-start w-3/4">
            <h1 className="flex-1 flex-col font-poppins font-semibold text-5xl mb-6">
              Personalize your property app experience with Aiho modules.
            </h1>
          </div>

          <p className="max-w-[700px] mt-2 text-darkBlue w-3/4">
            For those concerned about data storage, all data from the modules -
            as well as the modules' applications - run in a decentralized manner
            on the Ratio1 Edge Nodes Network, gated by your Property NFTs.
          </p>
        </div>
      </section>
      <div className="grid grid-cols-3 w-[1200px] gap-6">
        <div className="flex flex-col justify-start items-start bg-white rounded-3xl">
          <div className="p-6 flex flex-row justify-start items-center rounded-3xl">
            <Image
              src={module1}
              alt="Module"
              width={75}
              height={75}
              className="rounded-xl"
            />
            <div className="pl-2 flex flex-col">
              <h3 className="text-xl font-semibold">Property Card</h3>
              <h4 className="text-gray-400">
                Developer: <span className="text-blue-600">Ratio1</span>
              </h4>
            </div>
          </div>
          <div className="px-6 pb-6">
            The Property Card is a decentralized cloud storage solution built on
            Ratio1's R1FS, gated by the digital representation of your property.
            It ensures the continuity of your property's documentation and the
            vital data required by owners and third parties.
          </div>
        </div>

        <div className="flex flex-col justify-start items-start bg-white rounded-3xl">
          <div className="p-6 flex flex-row justify-start items-center rounded-3xl">
            <Image
              src={module0}
              alt="Module"
              width={75}
              height={75}
              className="rounded-xl"
            />
            <div className="pl-2 flex flex-col">
              <h3 className="text-xl font-semibold">Home Safety</h3>
              <h4 className="text-gray-400">
                Developer:{" "}
                <span className="text-blue-600">0x3a9f...b1c4e2</span>
              </h4>
            </div>
          </div>
          <div className="px-6 pb-6">
            The Home Safety module uses AI to monitor activity at the property’s
            public entrancies. When a potentially dangerous situation is
            identified, it instantly sends a warning or notification including
            the proofs to the user, helping them respond quickly and stay
            secure.
          </div>
        </div>

        <div className="flex flex-col justify-start items-start bg-white rounded-3xl">
          <div className="p-6 flex flex-row justify-start items-center rounded-3xl">
            <Image
              src={module2}
              alt="Module"
              width={75}
              height={75}
              className="rounded-xl"
            />
            <div className="pl-2 flex flex-col">
              <h3 className="text-xl font-semibold">Predictive Maintenance</h3>
              <h4 className="text-gray-400">
                Developer: <span className="text-blue-600">Build21</span>
              </h4>
            </div>
          </div>
          <div className="px-6 pb-6">
            The Predictive Maintenance module uses AI to monitor the health of
            devices and systems around the property. It analyzes performance
            data to detect early signs of wear or failure, sending users alerts
            before issues become serious, helping prevent breakdowns and reduce
            repair costs.
          </div>
        </div>

        <div className="flex flex-col justify-start items-start bg-white rounded-3xl">
          <div className="p-6 flex flex-row justify-start items-center rounded-3xl">
            <Image
              src={module6}
              alt="Module"
              width={75}
              height={75}
              className="rounded-xl"
            />
            <div className="pl-2 flex flex-col">
              <h3 className="text-xl font-semibold">Smart Lock</h3>
              <h4 className="text-gray-400">
                Developer:{" "}
                <span className="text-blue-600">0x1be7...90fa3d</span>
              </h4>
            </div>
          </div>
          <div className="px-6 pb-6">
            The Smart Lock is a blockchain-based property locking and unlocking
            solution, secured by the digital representation of your property. It
            allows property owners to lock or unlock their property and generate
            temporary keys for family members or guests (such as renters),
            granting them access as needed.
          </div>
        </div>

        <div className="flex flex-col justify-start items-start bg-white rounded-3xl">
          <div className="p-6 flex flex-row justify-start items-center rounded-3xl">
            <Image
              src={module4}
              alt="Module"
              width={75}
              height={75}
              className="rounded-xl"
            />
            <div className="pl-2 flex flex-col">
              <h3 className="text-xl font-semibold">Elder's Companion</h3>
              <h4 className="text-gray-400">
                Developer:{" "}
                <span className="text-blue-600">0x7d2c...e8d7a0</span>
              </h4>
            </div>
          </div>
          <div className="px-6 pb-6">
            The Elder's Companion module is a video-based AI system that
            monitors elderly individuals for signs of distress, such as falls or
            visible health issues. When it detects a potential emergency, it
            automatically alerts assigned contacts to ensure timely assistance,
            providing added safety and peace of mind.
          </div>
        </div>

        <div className="flex flex-col justify-start items-start bg-white rounded-3xl">
          <div className="p-6 flex flex-row justify-start items-center rounded-3xl">
            <Image
              src={module7}
              alt="Module"
              width={75}
              height={75}
              className="rounded-xl"
            />
            <div className="pl-2 flex flex-col">
              <h3 className="text-xl font-semibold">Sustainable Comfort</h3>
              <h4 className="text-gray-400">
                Developer:{" "}
                <span className="text-blue-600">0x54ee...c19a8f</span>
              </h4>
            </div>
          </div>
          <div className="px-6 pb-6">
            The Sustainable Comfort module monitors your property’s usage
            patterns and intelligently adapts consumer devices to match your
            lifestyle. By optimizing energy consumption, it makes your home more
            eco-friendly while helping reduce utility bills - delivering both
            comfort and sustainability.
          </div>
        </div>

        <div className="flex flex-col justify-start items-start bg-white rounded-3xl">
          <div className="p-6 flex flex-row justify-start items-center rounded-3xl">
            <Image
              src={module3}
              alt="Module"
              width={75}
              height={75}
              className="rounded-xl"
            />
            <div className="pl-2 flex flex-col">
              <h3 className="text-xl font-semibold">Development Inspector</h3>
              <h4 className="text-gray-400">
                Developer:{" "}
                <span className="text-blue-600">0xa492...3be76a</span>
              </h4>
            </div>
          </div>
          <div className="px-6 pb-6">
            The Development Inspector module is an AI system for property buyers
            that connects to on-site cameras, providing live streams and
            real-time progress logs. It offers transparency and peace of mind by
            keeping buyers constantly updated on their property's development
            status.
          </div>
        </div>

        <div className="flex flex-col justify-start items-start bg-white rounded-3xl">
          <div className="p-6 flex flex-row justify-start items-center rounded-3xl">
            <Image
              src={module5}
              alt="Module"
              width={75}
              height={75}
              className="rounded-xl"
            />
            <div className="pl-2 flex flex-col">
              <h3 className="text-xl font-semibold">FitHabits</h3>
              <h4 className="text-gray-400">
                Developer:{" "}
                <span className="text-blue-600">0x6e01...d44f59</span>
              </h4>
            </div>
          </div>
          <div className="px-6 pb-6">
            The FitHabits module tracks your in-home activity patterns and uses
            AI to suggest personalized healthy habits. From movement reminders
            to wellness tips, it helps you build a balanced lifestyle right
            within your daily routine.
          </div>
        </div>

        <div className="flex flex-col justify-start items-start bg-white rounded-3xl">
          <div className="pl-2 flex flex-col justify-center items-center w-full h-full">
            <h3 className="text-xl font-semibold w-[250px] text-center">
              Are you a developer? Add a module!
            </h3>
            <h4 className="text-gray-400 text-xl">Earn when it is used</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
