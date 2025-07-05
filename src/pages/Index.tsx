
import { Button } from "@/components/ui/button";
import { ExternalLink, Youtube, Music } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-12">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full"></div>
            <img 
              src="/lovable-uploads/8cdee727-74fa-4d9b-9b5f-3445ce19a78d.png" 
              alt="AI Workflow Daily Logo" 
              className="relative w-24 h-24 mx-auto mb-6 rounded-2xl shadow-2xl border border-slate-700"
            />
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 font-space-grotesk bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
            AI Workflow Daily
          </h1>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-xl mx-auto">
            Something amazing is coming soon. AI workflows, tools, and systems for productivity-obsessed creators and founders.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          <Button 
            asChild
            size="lg" 
            className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-medium w-full sm:w-auto shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <a 
              href="https://linktr.ee/aiworkflowdaily" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4"
            >
              Visit Our Linktree
              <ExternalLink className="w-5 h-5" />
            </a>
          </Button>
          
          <div className="flex justify-center space-x-6 pt-4">
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-200 group"
              asChild
            >
              <a 
                href="https://www.tiktok.com/@aiworkflowdaily" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Music className="w-5 h-5 group-hover:scale-110 transition-transform" />
                TikTok
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-200 group"
              asChild
            >
              <a 
                href="https://www.youtube.com/@AIWorkflowDaily" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
                YouTube
              </a>
            </Button>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-2xl">
          <div id="mc_embed_shell">
            <style type="text/css">
              {`
                #mc_embed_signup {
                  background: transparent !important;
                  clear: left;
                  font: 14px Inter, Arial, sans-serif !important;
                  width: 100% !important;
                  max-width: 500px;
                  margin: 0 auto;
                }
                #mc_embed_signup h2 {
                  color: white !important;
                  font-size: 24px !important;
                  font-weight: 600 !important;
                  margin-bottom: 20px !important;
                  font-family: 'Space Grotesk', sans-serif !important;
                }
                #mc_embed_signup .mc-field-group {
                  margin-bottom: 16px !important;
                }
                #mc_embed_signup label {
                  color: #cbd5e1 !important;
                  font-weight: 500 !important;
                  margin-bottom: 6px !important;
                  display: block !important;
                }
                #mc_embed_signup input[type="email"],
                #mc_embed_signup input[type="text"] {
                  background: #1e293b !important;
                  border: 1px solid #475569 !important;
                  border-radius: 8px !important;
                  padding: 12px !important;
                  color: white !important;
                  width: 100% !important;
                  font-size: 14px !important;
                }
                #mc_embed_signup input[type="email"]:focus,
                #mc_embed_signup input[type="text"]:focus {
                  border-color: #6366f1 !important;
                  outline: none !important;
                  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1) !important;
                }
                #mc_embed_signup .input-group ul {
                  list-style: none !important;
                  padding: 0 !important;
                  display: grid !important;
                  grid-template-columns: 1fr 1fr !important;
                  gap: 12px !important;
                  margin: 0 !important;
                }
                #mc_embed_signup .input-group li {
                  margin: 0 !important;
                  display: flex !important;
                  align-items: center !important;
                  gap: 8px !important;
                  padding: 8px !important;
                  background: rgba(30, 41, 59, 0.5) !important;
                  border-radius: 6px !important;
                  border: 1px solid #374151 !important;
                  transition: all 0.2s !important;
                }
                #mc_embed_signup .input-group li:hover {
                  background: rgba(30, 41, 59, 0.8) !important;
                  border-color: #6366f1 !important;
                }
                #mc_embed_signup .input-group label {
                  color: #94a3b8 !important;
                  font-size: 13px !important;
                  margin: 0 !important;
                  display: inline !important;
                  cursor: pointer !important;
                  flex: 1 !important;
                }
                #mc_embed_signup .input-group strong {
                  color: #cbd5e1 !important;
                  font-weight: 500 !important;
                  display: block !important;
                  margin-bottom: 12px !important;
                  text-align: left !important;
                }
                #mc_embed_signup input[type="radio"] {
                  accent-color: #6366f1 !important;
                  margin: 0 !important;
                  flex-shrink: 0 !important;
                }
                #mc_embed_signup .button {
                  background: linear-gradient(to right, #6366f1, #4f46e5) !important;
                  border: none !important;
                  border-radius: 8px !important;
                  color: white !important;
                  padding: 12px 32px !important;
                  font-size: 16px !important;
                  font-weight: 600 !important;
                  cursor: pointer !important;
                  transition: all 0.2s !important;
                  margin-top: 20px !important;
                }
                #mc_embed_signup .button:hover {
                  transform: translateY(-1px) !important;
                  box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3) !important;
                }
                #mc_embed_signup .asterisk {
                  color: #f87171 !important;
                }
                #mc_embed_signup .indicates-required {
                  color: #94a3b8 !important;
                  font-size: 12px !important;
                  margin-bottom: 16px !important;
                }
                #mc_embed_signup .helper_text {
                  color: #64748b !important;
                  font-size: 11px !important;
                }
                #mc_embed_signup .refferal_badge {
                  opacity: 0.6 !important;
                  margin-top: 16px !important;
                }
                #mc_embed_signup .optionalParent p {
                  text-align: center !important;
                }
              `}
            </style>
            <div id="mc_embed_signup">
              <form action="https://gmail.us1.list-manage.com/subscribe/post?u=189f293b0b47c3b4f65649c50&amp;id=6868c2e3f2&amp;f_id=00831de5f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                <div id="mc_embed_signup_scroll">
                  <h2>Join AWD Community</h2>
                  <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                    <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
                    <span id="mce-EMAIL-HELPERTEXT" className="helper_text">Email Address Required</span>
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-NAME">Name (Optional)</label>
                    <input type="text" name="NAME" className="text" id="mce-NAME" />
                  </div>
                  <div className="mc-field-group input-group">
                    <strong>What are you most interested in? (Optional)</strong>
                    <ul>
                      <li><input type="radio" name="MMERGE3" id="mce-MMERGE30" value="Prompt Engineering" /><label htmlFor="mce-MMERGE30">Prompt Engineering</label></li>
                      <li><input type="radio" name="MMERGE3" id="mce-MMERGE31" value="AI Agents" /><label htmlFor="mce-MMERGE31">AI Agents</label></li>
                      <li><input type="radio" name="MMERGE3" id="mce-MMERGE32" value="Automation &amp; Workflows" /><label htmlFor="mce-MMERGE32">Automation &amp; Workflows</label></li>
                      <li><input type="radio" name="MMERGE3" id="mce-MMERGE33" value="AI Tools" /><label htmlFor="mce-MMERGE33">AI Tools</label></li>
                      <li><input type="radio" name="MMERGE3" id="mce-MMERGE34" value="Everything!" /><label htmlFor="mce-MMERGE34">Everything!</label></li>
                    </ul>
                  </div>
                  <div className="mc-field-group input-group">
                    <strong>How did you hear about us? (Optional)</strong>
                    <ul>
                      <li><input type="radio" name="MMERGE4" id="mce-MMERGE40" value="TikTok" /><label htmlFor="mce-MMERGE40">TikTok</label></li>
                      <li><input type="radio" name="MMERGE4" id="mce-MMERGE41" value="YouTube" /><label htmlFor="mce-MMERGE41">YouTube</label></li>
                      <li><input type="radio" name="MMERGE4" id="mce-MMERGE42" value="From a friend" /><label htmlFor="mce-MMERGE42">From a friend</label></li>
                      <li><input type="radio" name="MMERGE4" id="mce-MMERGE43" value="Other" /><label htmlFor="mce-MMERGE43">Other</label></li>
                    </ul>
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-MMERGE5">If Other, please specify:</label>
                    <input type="text" name="MMERGE5" className="text" id="mce-MMERGE5" />
                  </div>
                  <div id="mce-responses" className="clear foot">
                    <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                    <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                  </div>
                  <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
                    <input type="text" name="b_189f293b0b47c3b4f65649c50_6868c2e3f2" tabIndex={-1} value="" />
                  </div>
                  <div className="optionalParent">
                    <div className="clear foot">
                      <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                      <p style={{margin: '0px auto'}}>
                        <a href="http://eepurl.com/jg7q5U" title="Mailchimp - email marketing made easy and fun">
                          <span style={{display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px'}}>
                            <img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style={{width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center'}} />
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
            <script type="text/javascript">
              {`(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='NAME';ftypes[1]='text';fnames[3]='MMERGE3';ftypes[3]='radio';fnames[4]='MMERGE4';ftypes[4]='radio';fnames[5]='MMERGE5';ftypes[5]='text';fnames[2]='MMERGE2';ftypes[2]='dropdown';}(jQuery));var $mcj = jQuery.noConflict(true);`}
            </script>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm">
            © 2024 AI Workflow Daily. Made with ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
