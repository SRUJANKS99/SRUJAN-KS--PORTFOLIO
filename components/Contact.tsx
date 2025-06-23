import { Mail, Phone, Linkedin, GithubIcon, FileText, User } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Contact Me
        </h2>

        <div
          className="rounded-2xl p-8 md:p-12 shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Details */}
            <div className="bg-white/70 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <User className="text-blue-600 mr-3" size={24} />
                Personal Details
              </h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <User className="text-blue-600 mr-3" size={20} />
                  <div>
                    <p className="text-gray-800 font-semibold">Srujan K S</p>
                    <p className="text-gray-600 text-sm">
                      Java Full Stack Developer
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="text-blue-600 mr-3" size={20} />
                  <div>
                    <p className="text-gray-800 font-semibold">
                      +91 7483183720
                    </p>
                    <p className="text-gray-600 text-sm">Mobile</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="text-blue-600 mr-3" size={20} />
                  <div>
                    <p className="text-gray-800 font-semibold">
                      srujan.ks0903@gmail.com
                    </p>
                    <p className="text-gray-600 text-sm">Email</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Networks */}
            <div className="bg-white/70 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Linkedin className="text-blue-600 mr-3" size={24} />
                Social Networks
              </h3>

              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/ks-srujan-gowda-21ab3b2a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-300 group border border-blue-200"
                >
                  <Linkedin
                    className="text-blue-600 mr-3 group-hover:text-blue-700"
                    size={20}
                  />
                  <div>
                    <p className="text-gray-800 font-semibold group-hover:text-blue-700">
                      LinkedIn
                    </p>
                    <p className="text-gray-600 text-sm">Professional Profile</p>
                  </div>
                </a>

                <a
                  href="https://github.com/SRUJANKS99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-300 group border border-blue-200"
                >
                  <GithubIcon
                    className="text-blue-600 mr-3 group-hover:text-blue-700"
                    size={20}
                  />
                  <div>
                    <p className="text-gray-800 font-semibold group-hover:text-blue-700">
                      GitHub
                    </p>
                    <p className="text-gray-600 text-sm">Code Repository</p>
                  </div>
                </a>

                <div className="flex flex-col gap-2">
                  <a
                    href="https://flowcv.com/resume/faql9tv9o50n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-300 group border border-blue-200"
                  >
                    <FileText
                      className="text-blue-600 mr-3 group-hover:text-blue-700"
                      size={20}
                    />
                    <div>
                      <p className="text-gray-800 font-semibold group-hover:text-blue-700">
                        Resume
                      </p>
                      <p className="text-gray-600 text-sm">View</p>
                    </div>
                  </a>

                  <a
                    href="/SRUJAN-K-S-CV.pdf"
                    download
                    className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-all duration-300 group border border-green-200"
                  >
                    <FileText
                      className="text-green-600 mr-3 group-hover:text-green-700"
                      size={20}
                    />
                    <div>
                      <p className="text-gray-800 font-semibold group-hover:text-green-700">
                        Download Resume
                      </p>
                      <p className="text-gray-600 text-sm">PDF format</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-lg">
              Ready to collaborate on your next project?
            </p>
            <p className="text-gray-800 mt-2 font-semibold">
              Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
