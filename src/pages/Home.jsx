export default function Home () {
    return (
        <>
            <section className={'full-hd-section bg-main-banner'}>
                <div className={'inner-container'}>
                    <h2 className={'heading-wayble'}><span className={'blind'}>WAYBLE circular</span></h2>
                    <p>폐기물 · 자원순환 전 과정 관리 서비스</p>
                    <nav className={'main-nav-wrapper'}>
                        <ul>
                            <li>
                                <a href="/" className={'btn btn-transparent'}>더 알아보기</a>
                            </li>
                            <li>
                                <a href="/" className={'btn btn-primary large'}>무료이용 상담하기</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={'main-slider-pagination'}>
                        <button className={'prev'} onClick={() => {}}><span className={'blind'}>prev</span></button>
                        <p><strong>01</strong> / 03</p>
                        <button className={'next'} onClick={() => {}}><span className={'blind'}>next</span></button>
                        <button className={'stop'} onClick={() => {}}><span className={'blind'}>stop</span></button>
                    </div>
                </div>
            </section>

            <section className={'full-hd-section'}>
                <div className={'inner-container'}>
                    <h2 className={'heading-50p'}>혹시 이런 고민 하고 계신가요?</h2>
                    <ul className={'main-worry-list'}>
                        <li>
                            <div className={'img-container'}>
                                <img src={'./images/main-worry-1.jpg'} alt={""}/>
                            </div>
                            <blockquote>“ <span className={'color-primary'}>저렴하고 일정 대응이 빠른</span> 처리업체를 찾고 있어요 ”</blockquote>
                            <p>- A 사업장 계약담당자 -</p>
                        </li>
                        <li>
                            <div className={'img-container'}>
                                <img src={'./images/main-worry-2.jpg'} alt={""}/>
                            </div>
                            <blockquote>“ 예산 대비 <span className={'color-primary'}>폐기물 처리 비용이</span> 많이 나와 고민이에요 “</blockquote>
                            <p>- B본사 구매담당자 -</p>
                        </li>
                        <li>
                            <div className={'img-container'}>
                                <img src={'./images/main-worry-3.jpg'} alt={""}/>
                            </div>
                            <blockquote>“ <span className={'color-primary'}>과태료 걱정없이 믿고 맡길 수 있는</span> 폐기물 업체가 필요해요 ”</blockquote>
                            <p>- C공장 환경담당자 -</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={'full-hd-section'}>
                <div className={'inner-container'}>
                    <h2 className={'main-waste-management-title'}>폐기물 · 자원순환 전 과정 관리 서비스</h2>
                    <p className={'trust-me middle-underline'}><mark className={'primary-mark'}>웨이블 서큘러에 맡겨주세요</mark></p>
                </div>
            </section>

            <section className={'full-hd-section'}>
                <div className={'inner-container'}>
                    <h2 className={'headline-emphasis'}>웨이블 서큘러는</h2>
                    <p>폐기물/순환자원의 전사적 관리 체계를 구축하여, <strong className={'color-primary'}>Zero Waste 달성</strong>을 지원합니다.</p>
                    <ul className={'main-management-list'}>
                        <li>
                            <h3><mark className={'primary-mark'}>통합관리 지원</mark></h3>
                            <p>믿을 수 있는 처리업체 선정부터<br /> 정산까지 원스탑 서비스 제공</p>
                        </li>
                        <li>
                            <h3><mark className={'primary-mark'}>디지털 기반 업무</mark></h3>
                            <p>간편한 배출 신청 및 올바로 인계서 등 필수 서류 자동화 기능 제공</p>
                        </li>
                        <li>
                            <h3><mark className={'primary-mark'}>자원순환 전 과정 관리</mark></h3>
                            <p>폐기물의 재활용/자원화 전 과정 인증 지원 및 관리</p>
                        </li>
                    </ul>
                    <hr />
                    <ul className={'main-management-list'}>
                        <li>
                            <h3><mark className={'primary-mark'}>비용 최적화</mark></h3>
                            <p>고객사별 배출 품목 및 현황에 적합한 업체 선정</p>
                        </li>
                        <li>
                            <h3><mark className={'primary-mark'}>손쉬운 데이터 관리</mark></h3>
                            <p>전국 사업장 폐기물 데이터 통합 대시보드 제공</p>
                        </li>
                        <li>
                            <h3><mark className={'primary-mark'}>ESG 경영 지원</mark></h3>
                            <p>환경지표 관리 및 UL ZWTL 인증지원</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={'full-hd-section bg-main-service'}>
                <div className={'inner-container fit-container'}>
                    <h2 className="blind">서비스 목록</h2>
                    <ul className={'main-service-list'}>
                        <li>
                            <button type={'button'} title={''}>폐기물 디지털 관리</button>
                        </li>
                        <li>
                            <button type={'button'} title={''}>자원순환 전 과정 관리</button>
                        </li>
                        <li>
                            <button type={'button'} title={''}>폐기물 통합 관리</button>
                        </li>
                        <li>
                            <button type={'button'} title={''} className={'stop'}><span className={'blind'}>stop</span></button>
                        </li>
                    </ul>
                    <div className={'main-service-section'}>
                        <section>
                            <h3 className={'heading-50p text-left'}>폐기물 디지털 관리</h3>
                            <ul>
                                <li>스마트 배출신청부터 올바로 인계서 자동전송까지, 반복적인 관리업무의 자동화 디지털화</li>
                                <li>전국 사업장의 배출현황, ZWTL 인증 등 환경성과지표 관리 지원 기능</li>
                            </ul>
                            <nav>
                                <a href={'/'} className={'btn btn-primary'}>VIEW MORE</a>
                            </nav>
                        </section>
                        <div>
                            <img src={'./images/main-service-1.png'}  alt={''} />
                        </div>
                    </div>
                </div>
            </section>
            <section className={''}>
                <div className={'trusted-by-section'}>
                    <h2 className={'text-center'}>TRUSTED BY</h2>
                    <ul className={'trusted-company-list'}>
                        <li><img src={'./images/main-logo-microsoft.png'} alt={'microsoft'} /> </li>
                        <li><img src={'./images/main-logo-kb.png'} alt={'kb'} /> </li>
                        <li><img src={'./images/main-logo-google.png'} alt={'google'} /> </li>
                        <li><img src={'./images/main-logo-skecoplant.png'} alt={'skecoplant'} /> </li>
                        <li><img src={'./images/main-logo-samsung.png'} alt={'samsung'} /> </li>
                        <li><img src={'./images/main-logo-jyp.png'} alt={'jyp'} /> </li>
                        <li><img src={'./images/main-logo-kakao.png'} alt={'kakao'} /> </li>
                    </ul>
                </div>
            </section>
            <section className={'download-section'}>
                <div>
                    <h2><span className={'color-primary'}>웨이블 서큘러</span>에 대해</h2>
                    <p>자세히 알고 싶다면, 지금 바로 상담 신청 해보세요</p>
                    <nav>
                        <ul>
                            <li>
                                <a href={''} className={'btn btn-primary'} title={''}>무료 도입 문의하기</a>
                            </li>
                            <li>
                                <a href={''} className={'btn btn-transparent'} title={''}>Download on the App Store</a>
                            </li>
                            <li>
                                <a href={''} className={'btn btn-transparent'} title={''}>GET IT ON Google Play</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    )
}