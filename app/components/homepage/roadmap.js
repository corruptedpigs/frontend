import Image from "next/image";

const Roadmap = () => {
  return (
    <section id="roadmap" className="bg-violet py-10 md:py-16">
      <div className="container mx-auto px-4 text-neutral-content">
        <h2 className="text-4xl font-bold mb-8 text-center">Roadmap</h2>
        <ul className="timeline timeline-snap-icon timeline-vertical mx-auto max-w-screen-lg">
          <li>
            <div className="timeline-end">Q1 2024</div>
            <div className="timeline-middle">
              <Image src="/logo.png"
                alt="corrupted pigs logo"
                className="mb-1"
                height={45}
                width={45}
                priority
              />
            </div>
            <div className="timeline-start timeline-box bg-transparent">
              <dl>
                <dt>Project Conceptualization</dt>
                <dd>Define on which blockchain the NFTs will be deployed</dd>

                <dt>Team Structure</dt>
                <dd>Recruit key team members, including developers, designers, and community managers.</dd>
              </dl>
            </div>
            <hr className="bg-red-700"/>
          </li>
          <li>
            <hr className="bg-orange-700"/>
            <div className="timeline-start">Q2 2024</div>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end timeline-box bg-transparent">
              <dl>
                <dt>Project Conceptualization</dt>
                <dd>Finalize game mechanics and NFT design.</dd>

                <dt>Smart Contract Development</dt>
                <dd>Develop and test smart contracts for NFTs and in-game transactions.</dd>

                <dt>Community Building</dt>
                <dd>Launch social media channels and engage early adopters.</dd>
              </dl>
            </div>
            <hr className="bg-orange-600"/>
          </li>
          <li>
            <hr className="bg-yellow-300"/>
            <div className="timeline-start timeline-box bg-transparent">
              <dl>
                <dt>NFT Collection Launch</dt>
                <dd>Release the first batch of Corrupted Pigs NFTs on the Polygon network.</dd>

                <dt>Marketplace Integration</dt>
                <dd>List NFTs on major NFT marketplaces for trading.</dd>

                <dt>Beta Game Launch</dt>
                <dd>Release a beta version of the burning pigs game for selected players.</dd>
              </dl>
            </div>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end">Q3 2024</div>
            <hr/>
          </li>
          <li>
            <hr/>
            <div className="timeline-start">Q4 2024</div>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end timeline-box bg-transparent">
              <dl>
                <dt>Full Game Launch</dt>
                <dd>Officially launch the Corrupted Pigs social game with full functionality.</dd>

                <dt>Community Events</dt>
                <dd>Host events and contests to boost engagement and reward participants.</dd>
              </dl>
            </div>
            <hr/>
          </li>
          <li>
            <hr/>
            <div className="timeline-end">Q1 2025</div>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start timeline-box bg-transparent">
              <dl>
                <dt>Exclusive Content</dt>
                <dd>Release special NFTs and in-game items for top players and contributors.</dd>

                <dt>Governance</dt>
                <dd>Implement a community governance system for player input on future developments.</dd>

                <dt>Partnerships</dt>
                <dd>Form strategic partnerships with other blockchain projects and organizations.</dd>
              </dl>
            </div>
            <hr/>
          </li>
          <li>
            <hr/>
            <div className="timeline-start">Q2 2025</div>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end timeline-box bg-transparent">
              <dl>
                <dt>Continuous Updates</dt>
                <dd>Regularly update the game with new features, content, and improvements.</dd>

                <dt>Expansion</dt>
                <dd>Explore opportunities for cross-game interoperability and additional blockchain integrations.</dd>

                <dt>Sustainability Initiatives</dt>
                <dd>Launch programs to support social and environmental causes through in-game activities.</dd>
              </dl>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Roadmap;
