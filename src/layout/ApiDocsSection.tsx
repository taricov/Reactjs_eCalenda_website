export default function ApiDocsSection() {
  return (
    <>
      <section
        className="method first-of-group"
        id="authentication"
        data-testid="authentication"
      >
        <div className="MethodArea-divider" />
        <div className="method-area method-area-expanded">
          <div className="method-copy">
            <div className="method-copy-padding">
              <div className="MethodCopyTitle">
                <h1 className="MethodCopyTitle-anchor">Authentication</h1>
              </div>
              <p>
                The Stripe API uses <a href="/docs/keys">API keys</a> to
                authenticate requests. You can view and manage your API keys in{" "}
                <a href="/login?redirect=/account/apikeys">
                  the Stripe Dashboard
                </a>
                .
              </p>
              <p>
                Test mode secret keys have the prefix <code>sk_test_</code> and
                live mode secret keys have the prefix <code>sk_live_</code>.
                Alternatively, you can use{" "}
                <a href="/docs/keys#limiting-access-with-restricted-api-keys">
                  restricted API keys
                </a>{" "}
                for granular permissions.
              </p>
              <p>
                Your API keys carry many privileges, so be sure to keep them
                secure! Do not share your secret API keys in publicly accessible
                areas such as GitHub, client-side code, and so forth.
              </p>
              <p>
                Authentication to the API is performed via{" "}
                <a href="http://en.wikipedia.org/wiki/Basic_access_authentication">
                  HTTP Basic Auth
                </a>
                . Provide your API key as the basic auth username value. You do
                not need to provide a password.
              </p>
              <p>
                If you need to authenticate via bearer auth (e.g., for a
                cross-origin request), use{" "}
                <code>
                  -H "Authorization: Bearer sk_test_4eC39HqLyjWDarjtT1zdp7dc"
                </code>{" "}
                instead of <code>-u sk_test_4eC39HqLyjWDarjtT1zdp7dc</code>.
              </p>
              <p>
                All API requests must be made over{" "}
                <a href="http://en.wikipedia.org/wiki/HTTP_Secure">HTTPS</a>.
                Calls made over plain HTTP will fail. API requests without
                authentication will also fail.
              </p>
            </div>
            <p>
              Related video:{" "}
              <a href="/docs/videos/developer-foundations?video=authentication">
                Authentication
              </a>
              .
            </p>
            <p className="csat-widget">
              <span className="csat-widget-text">
                Was this section helpful?
              </span>
              <span className="csat-button csat-button-yes common-Button">
                Yes
              </span>
              <span className="csat-button csat-button-no common-Button">
                No
              </span>
            </p>
          </div>
          <div className="method-example">
            <span style={{ fontSize: "0px" }} />
            <div className="method-example-part">
              <div className="method-example-request include-prompt">
                <div className="method-example-request-topbar">
                  <div className="method-example-request-title">
                    Authenticated Request
                  </div>
                  <div className="LangSwitcher">
                    <div className="Pressable Pressable--focus Pressable--layer Pressable--layer--elevated Pressable--radius Pressable--radius--all Pressable--size Pressable--size--medium Pressable--width Pressable--width--auto Select bs-SelectLegacy Box-root Flex-inlineFlex">
                      <div className="Pressable-part Pressable-background Box-root Box-background--white" />
                      <div className="Pressable-part Pressable-keylines">
                        <div className="Pressable-part Pressable-baseKeyline" />
                      </div>
                      <div className="Pressable-part Pressable-shadows">
                        <div className="Pressable-part Pressable-focusShadow" />
                        <div className="Pressable-part Pressable-hoverShadow" />
                        <div className="Pressable-part Pressable-elevatedShadow" />
                        <div className="Pressable-part Pressable-baseShadow" />
                      </div>
                      <div className="Pressable-children">
                        <select>
                          <option disabled>Select library</option>
                          <option value="curl">cURL</option>
                          <option value="cli">Stripe CLI</option>
                          <option value="ruby">Ruby</option>
                          <option value="python">Python</option>
                          <option value="php">PHP</option>
                          <option value="java">Java</option>
                          <option value="node">Node.js</option>
                          <option value="go">Go</option>
                          <option value="dotnet">.NET</option>
                        </select>
                        <div className="SVGInline SVGInline--cleaned SVG Select-arrows Box-root Flex-flex">
                          <svg
                            className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Select-arrows-svg"
                            style={{ width: "12px", height: "12px" }}
                            height={16}
                            viewBox="0 0 16 16"
                            width={16}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.591 9.992a1 1 0 1 1 1.416 1.415l-4.3 4.3a1 1 0 0 1-1.414 0l-4.3-4.3A1 1 0 0 1 4.41 9.992L8 13.583zm0-3.984L8 2.417 4.409 6.008a1 1 0 1 1-1.416-1.415l4.3-4.3a1 1 0 0 1 1.414 0l4.3 4.3a1 1 0 1 1-1.416 1.415z"
                              fillRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="MethodExampleTopbarButton">
                    <div className="MethodExampleTopbarButton-spacer" />
                    <div className="Box-root Flex-flex">
                      <div className="Box-root Flex-flex">
                        <button className="ClickToCopy">
                          <div className="SVGInline SVGInline--cleaned SVG Icon Icon--clipboard SVG--color SVG--color--blue200 Box-root Flex-flex">
                            <svg
                              className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--clipboard-svg SVG--color-svg SVG--color--blue200-svg"
                              style={{ width: "16px", height: "16px" }}
                              height={16}
                              viewBox="0 0 16 16"
                              width={16}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 5h2a3 3 0 0 0 3-3 2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2 3 3 0 0 0 3 3zM6 2a2 2 0 1 1 4 0 1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"
                                fillRule="evenodd"
                              />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="method-example-request-body">
                  <div className="CodeBlock" style={{ minHeight: "54px" }}>
                    <div className="CodeBlock-scroll">
                      <div className="CodeBlock-lines">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                      </div>
                      <div
                        className="pieces-code-wrapper"
                        style={{ textAlign: "left", marginTop: "10px" }}
                      >
                        <pre
                          className="CodeBlock-pre  language-bash"
                          style={{
                            marginBottom: "0px",
                            marginTop: "0px",
                            position: "relative",
                          }}
                        >
                          <code className="  language-bash">
                            <span className="token function">curl</span>{" "}
                            <span className="token url">
                              https://api.stripe.com/v1/charges
                            </span>{" "}
                            \{"\n"}
                            {"  "}
                            <span className="token api-key">
                              <span className="token request-flag">-u</span>{" "}
                              sk_test_4eC39HqLyjWDarjtT1zdp7dc
                            </span>
                            :{"\n"}
                            <span className="token comment">
                              # The colon prevents curl from asking for a
                              password.
                            </span>
                          </code>
                          <div
                            className="open_grepper_editor"
                            title="Edit & Save To Grepper"
                          />
                        </pre>
                        <div
                          className="pieces-btn-wrapper"
                          style={{
                            border: "none",
                            display: "flex",
                            opacity: 0,
                            width: "auto",
                            transition: "opacity 0.3s ease-out 0s",
                            height: "26px",
                            marginTop: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          <button
                            className="pieces-btn pieces-copy-and-save"
                            style={{
                              width: "auto",
                              fontSize: "12px",
                              border: "1px solid rgb(33, 33, 33)",
                              borderRadius: "16px",
                              marginRight: "4px",
                              padding: "4px 6px 4px 4px",
                              lineHeight: "normal",
                              height: "fit-content",
                              cursor: "pointer",
                              userSelect: "none",
                              display: "flex",
                              alignItems: "center",
                              backgroundColor: "rgb(33, 33, 33)",
                              color: "rgb(255, 255, 255)",
                            }}
                          >
                            <img
                              src="https://storage.googleapis.com/pieces-web-extensions-cdn/pieces.png"
                              className="pieces-logo"
                              style={{
                                margin: "0px 4px 0px 0px",
                                borderRadius: "50%",
                                filter: "none",
                                float: "left",
                                width: "16px",
                                height: "16px",
                              }}
                            />
                            <span className="pieces-btn-text">
                              Copy and Save
                            </span>
                          </button>
                          <button
                            className="pieces-btn pieces-share"
                            style={{
                              width: "auto",
                              fontSize: "12px",
                              border: "1px solid rgb(33, 33, 33)",
                              borderRadius: "16px",
                              marginRight: "4px",
                              padding: "4px 6px 4px 4px",
                              lineHeight: "normal",
                              height: "fit-content",
                              cursor: "pointer",
                              userSelect: "none",
                              display: "flex",
                              alignItems: "center",
                              backgroundColor: "rgb(33, 33, 33)",
                              color: "rgb(255, 255, 255)",
                            }}
                          >
                            <img
                              src="https://storage.googleapis.com/pieces-web-extensions-cdn/link.png"
                              className="pieces-logo"
                              style={{
                                margin: "0px 4px 0px 0px",
                                borderRadius: "50%",
                                filter: "none",
                                float: "left",
                                width: "16px",
                                height: "16px",
                              }}
                            />
                            <span className="pieces-btn-text">Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="method-example-response">
                <div className="method-example-response-topbar">
                  <div className="method-example-response-title">
                    Your API Key
                  </div>
                </div>
                <p>
                  A sample test API key is included in all the examples here, so
                  you can test any example right away. Do not submit any
                  personally identifiable information in requests made with this
                  key.
                </p>
                <p>
                  To test requests using your account, replace the sample API
                  key with your actual API key or{" "}
                  <a
                    className="docs-link"
                    href="/login?redirect=https%3A%2F%2Fstripe.com%2Fdocs%2Fapi%2Ferrors"
                  >
                    sign in
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
