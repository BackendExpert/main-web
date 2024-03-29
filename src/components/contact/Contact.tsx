//import reactions
import IonIcon from "@reacticons/ionicons"

const Contact = () => {
    // data for Enquiries
    let enquiries = [
        {title: "General Enquiries", email: "info@nifs.ac.lk"},
        {title: "Media Enquiries", email: "media@nifs.ac.lk"},
        {title: "Research Enquiries", email: "research@nifs.ac.lk"},
        {title: "Website Enquiries", email: "web@nifs.ac.lk"},
        {title: "Right to Information", email: "rit@nifs.ac.lk"},        
    ];

    //data for social Accounts

    let socialAccounts = [
        {logo: <IonIcon name="logo-facebook" size="large"></IonIcon>, name: "Facebook", link: "/"},
        {logo: <IonIcon name="logo-twitter" size="large"></IonIcon>, name: "Twitter", link: "/"},
        {logo: <IonIcon name="logo-instagram" size="large"></IonIcon>, name: "Instagram", link: "/"},
        {logo: <IonIcon name="logo-youtube" size="large"></IonIcon>, name: "Youtube", link: "/"},
        {logo: <IonIcon name="logo-linkedin" size="large"></IonIcon>, name: "LinkedIn", link: "/"},        
    ];

  return (
    <div className="container mx-auto lg:px-32 px-10 py-16 text-[#293352]">
        <h1 className="text-center font-semibold text-4xl">Contact Us</h1>
        <div className="my-8">
            <h2 className="text-2xl font-semibold">Office Location</h2>
            <hr className="mb-4" />

                {/*--------------------------- Office Locations Start -------------------------------*/}
            <div className="lg:grid grid-cols-3 gap-4">
                <div className="">
                    <p className="text-xl pt-4 pb-4 font-semibold">Headquarters</p>
                    <div className="">
                        <p>National Institute of Fundemental Studies</p>
                        <p>Hanthana Road</p>
                        <p>Kandy</p>
                        <p>Sri Lanka</p>
                    </div>

                    <div className="flex py-8">
                        <p className="py-4">
                            <IonIcon name="call" size="large"></IonIcon>
                        </p>
                        <div className="pl-2">
                            <p>(+94) 81 22 32 106</p>
                            <p>(+94) 81 22 32 107</p>
                            <p>(+94) 81 22 32 131</p>
                        </div>
                    </div>
                    <div className="flex pt-2 pb-4">
                        <p className="py-2">
                            <IonIcon name="mail" size="large"></IonIcon>
                        </p>
                        <div className="pl-2 pt-3">
                            <p>info@nifs.ac.lk</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <p className="text-xl pt-4 pb-4 font-semibold">Colombo Office</p>
                    <div className="">
                        <p>National Institute of Fundemental Studies</p>
                        <p>No.380/71,72, Bauddhaloka Mawatha</p>
                        <p>Colombo 07</p>
                        <p>Sri Lanka</p>
                    </div>

                    <div className="flex py-8">
                        <p className="py-4">
                            <IonIcon name="call" size="large"></IonIcon>
                        </p>
                        <div className="pl-2 pt-5">
                            <p>(+94) 11 26 97 538</p>
                        </div>
                    </div>
                    <div className="flex pt-2 pb-4">
                        <p className="py-2">
                            <IonIcon name="mail" size="large"></IonIcon>
                        </p>
                        <div className="pl-2 pt-3">
                            <p>info@nifs.ac.lk</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <p className="text-xl pt-4 pb-4 font-semibold">NIFS Sam Popham's Arboretum</p>
                    <div className="">
                        <p>Kandlama Road</p>
                        <p>Dambulla</p>
                        <p>Matale</p>
                        <p>Sri Lanka</p>
                    </div>

                    <div className="flex py-8">
                        <p className="py-4">
                            <IonIcon name="call" size="large"></IonIcon>
                        </p>
                        <div className="pl-2 pt-5">
                            <p>(+94) 66 20 57 960</p>
                        </div>
                    </div>
                    <div className="flex pt-2 pb-4">
                        <p className="py-2">
                            <IonIcon name="mail" size="large"></IonIcon>
                        </p>
                        <div className="pl-2 pt-3">
                            <p>info@nifs.ac.lk</p>
                        </div>
                    </div>
                </div>
            </div>
                {/*---------------------------- Office Locations END* --------------------------------*/}

                {/*---------------------------- Enquiries Start* --------------------------------*/}
            <div className="pt-8">
                <h2 className="text-2xl font-semibold">Enquiries</h2>
                <hr className="mb-4" />

                <div className="lg:grid grid-cols-3 gap-3">
                    {/* fetch data from enquiries */}
                    {
                        enquiries.map((enquiry) => (
                            <div className="">
                                <p className="text-xl font-semibold">{enquiry.title}</p>
                                <p className="pl-8 py-4">{enquiry.email}</p>
                            </div>
                        ))
                    }
                    {/* fetch data from enquiries  END*/}
                </div>
            </div>
                {/*---------------------------- Enquiries Start* --------------------------------*/}

                {/*---------------------------- Social Accounts Start* --------------------------------*/}
            <div className="pt-8">
                <h2 className="text-2xl font-semibold">Social Media</h2>
                <hr className="mb-4" />
                <div className="lg:grid grid-cols-3 gap-3">
                    {/* fetch data from socialAccounts */}
                    {
                        socialAccounts.map((socialAccount) => (
                            <div className="py-4">
                                <a href={socialAccount.link}>
                                    <div className="flex">
                                        <p className="text-xl font-semibold">{socialAccount.logo}</p>
                                        <p className="pl-4 py-2">{socialAccount.name}</p>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                    {/* fetch data from socialAccounts  END*/}
                </div>
            </div>

                {/*---------------------------- Social Accounts End* --------------------------------*/}
        </div>
    </div>
  )
}

export default Contact