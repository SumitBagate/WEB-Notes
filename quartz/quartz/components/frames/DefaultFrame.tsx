import { PageFrame, PageFrameProps } from "./types"
import HeaderConstructor from "../Header"

const Header = HeaderConstructor()

/**
 * The default page frame — three-column layout with left sidebar, center
 * content (header + body + afterBody), and right sidebar, followed by a footer.
 *
 * This is the original Quartz layout, extracted from renderPage.tsx.
 */
export const DefaultFrame: PageFrame = {
  name: "default",
  render({
    componentData,
    header,
    beforeBody,
    pageBody: Content,
    afterBody,
    left,
    right,
    footer,
  }: PageFrameProps) {
    return (
      <>
        <nav class="panel-toolbar" aria-label="Page panels">
          <button
            class="panel-toggle panel-toggle-left"
            type="button"
            aria-label="Show Explorer"
            title="Show Explorer"
            aria-expanded="true"
          >
            <span class="panel-toggle-icon" aria-hidden="true">
              ☰
            </span>
          </button>
          <span class="panel-toolbar-title">{componentData.cfg.pageTitle ?? "Note"}</span>
          <button
            class="panel-toggle panel-toggle-right"
            type="button"
            aria-label="Show graph and table of contents"
            title="Show graph and table of contents"
            aria-expanded="true"
          >
            <span class="panel-toggle-icon" aria-hidden="true">
              ☰
            </span>
          </button>
        </nav>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              const body = document.querySelector("#quartz-body")
              const left = document.querySelector(".panel-toggle-left")
              const right = document.querySelector(".panel-toggle-right")
              if (!body || !left || !right) return

              const setExpanded = (button, expanded) => button.setAttribute("aria-expanded", String(expanded))
              left.addEventListener("click", () => {
                const mobileExplorer = document.querySelector(".explorer button.mobile-explorer")
                if (mobileExplorer && window.matchMedia("(max-width: 800px)").matches) {
                  mobileExplorer.click()
                  setExpanded(left, !body.classList.contains("lock-scroll"))
                  return
                }
                const hidden = body.classList.toggle("panel-left-hidden")
                setExpanded(left, !hidden)
              })
              right.addEventListener("click", () => {
                const hidden = body.classList.contains("panel-graph-hidden")
                body.classList.toggle("panel-graph-hidden", !hidden)
                body.classList.toggle("panel-toc-hidden", !hidden)
                setExpanded(right, hidden)
              })
            })()`,
          }}
        />
        <div class="left sidebar">
          {left.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>
        <div class="center">
          <div class="page-header">
            <Header {...componentData}>
              {header.map((HeaderComponent) => (
                <HeaderComponent {...componentData} />
              ))}
            </Header>
            <div class="popover-hint">
              {beforeBody.map((BodyComponent) => (
                <BodyComponent {...componentData} />
              ))}
            </div>
          </div>
          <Content {...componentData} />
          <hr />
          <div class="page-footer">
            {afterBody.map((BodyComponent) => (
              <BodyComponent {...componentData} />
            ))}
          </div>
        </div>
        <div class="right sidebar">
          {right.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>
        {footer.map((FooterComponent) => (
          <FooterComponent {...componentData} />
        ))}
        <footer class="site-footer">
          <p>Created by Sumit</p>
          <ul>
            <li>
              <a href="https://github.com/SumitBagate">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sumit-bagate-97871b296">LinkedIn</a>
            </li>
          </ul>
        </footer>
      </>
    )
  },
}
