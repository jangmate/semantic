export default function Home () {
    return (
        <>
            <section className={'full-hd-section bg-main-banner'}>
                <div className={'inner-container'}>
                    <h2 className={'heading-wayble'}><span className={'blind'}>WAYBLE circular</span></h2>
                    <p>폐기물 · 자원순환 전 과정 관리 서비스</p>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">더 알아보기</a>
                            </li>
                            <li>
                                <a href="/">무료이용 상담하기</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <section className={'full-hd-section'}>
                <div className={'inner-container'}>
                    <h2>혹시 이런 고민 하고 계신가요?</h2>
                    <ul className={'worry-list'}>
                        <li>
                            <figure>
                                <img src={'/'} alt={""}/>
                            </figure>
                            <blockquote>“ <span>저렴하고 일정 대응이 빠른</span> 처리업체를 찾고 있어요 ”</blockquote>
                            <p>- A 사업장 계약담당자 -</p>
                        </li>
                        <li>
                            <figure>
                                <img src={'/'} alt={""}/>
                            </figure>
                            <blockquote>“ 예산 대비 <span>폐기물 처리 비용이</span> 많이 나와 고민이에요 “</blockquote>
                            <p>- B본사 구매담당자 -</p>
                        </li>
                        <li>
                            <figure>
                                <img src={'/'} alt={""}/>
                            </figure>
                            <blockquote>“ <span>과태료 걱정없이 믿고 맡길 수 있는</span> 폐기물 업체가 필요해요 ”</blockquote>
                            <p>- C공장 환경담당자 -</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={'full-hd-section'}>
                <h2>폐기물 · 자원순환 전 과정 관리 서비스</h2>
                <p className={'trust-me middle-underline'}><mark>웨이블 서큘러에 맡겨주세요</mark></p>
            </section>
            <section className={'full-hd-section'}>
                <h2><b>웨이블 서큘러는</b> <br /> 폐기물/순환자원의 전사적 관리 체계를 구축하여, Zero Waste 달성을 지원합니다.</h2>
                <ul>
                    <li>
                        <h3><mark>통합관리 지원</mark></h3>
                        <p>믿을 수 있는 처리업체 선정부터 정산까지 원스탑 서비스 제공</p>
                    </li>
                    <li>
                        <h3><mark>디지털 기반 업무</mark></h3>
                        <p>간편한 배출 신청 및 올바로 인계서 등 필수 서류 자동화 기능 제공</p>
                    </li>
                    <li>
                        <h3><mark>자원순환 전 과정 관리</mark></h3>
                        <p>폐기물의 재활용/자원화 전 과정 인증 지원 및 관리</p>
                    </li>
                    <li>
                        <h3><mark>비용 최적화</mark></h3>
                        <p>고객사별 배출 품목 및 현황에 적합한 업체 선정</p>
                    </li>
                    <li>
                        <h3><mark>손쉬운 데이터 관리</mark></h3>
                        <p>전국 사업장 폐기물 데이터 통합 대시보드 제공</p>
                    </li>
                    <li>
                        <h3><mark>ESG 경영 지원</mark></h3>
                        <p>환경지표 관리 및 UL ZWTL 인증지원</p>
                    </li>
                </ul>
            </section>
            <section className={'full-hd-section'}>
                <h2 className="blind">서비스 목록</h2>
                <ul>
                   <li>
                        <button type={'button'} title={''}>폐기물 디지털 관리</button>
                    </li>
                    <li>
                        <button type={'button'} title={''}>자원순환 전 과정 관리</button>
                    </li>
                    <li>
                        <button type={'button'} title={''}>폐기물 통합 관리</button>
                    </li>
                </ul>
                <article>
                    <h3>폐기물 디지털 관리</h3>
                    <ul>
                        <li>스마트 배출신청부터 올바로 인계서 자동전송까지, 반복적인 관리업무의 자동화 디지털화</li>
                        <li>전국 사업장의 배출현황, ZWTL 인증 등 환경성과지표 관리 지원 기능</li>
                    </ul>
                    <nav>
                        <a href={'/'}>VIEW MORE</a>
                    </nav>
                </article>
            </section>
            <section className={'full-hd-section'}>
                <h2>TRUSTED BY</h2>
                <ul>
                    <li><span className={'blind'}>Microsoft</span></li>
                    <li><span className={'blind'}>KB</span></li>
                    <li><span className={'blind'}>Google</span></li>
                    <li><span className={'blind'}>SK ecoplant</span></li>
                    <li><span className={'blind'}>SAMSUNG</span></li>
                    <li><span className={'blind'}>JYP ENTERTAINMENT / LEADER IN ENTERTAINMENT</span></li>
                    <li><span className={'blind'}>kakao</span></li>
                </ul>
            </section>
            <section className={'full-hd-section'}>
                <h2><b>웨이블 서큘러에 대해 자세히 알고 싶다면,</b> <br /> 지금 바로 상담 신청 해보세요</h2>
                <nav>
                    <ul>
                        <li>
                            <a href={''} title={''}>무료 도입 문의하기</a>
                        </li>
                        <li>
                            <a href={''} title={''}>Download on the App Store</a>
                        </li>
                        <li>
                            <a href={''} title={''}>GET IT ON Google Play</a>
                        </li>
                    </ul>
                </nav>
            </section>
        </>
    )
}