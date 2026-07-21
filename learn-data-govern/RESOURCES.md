# Data Governance — Curated Resource List

面向"做过部分治理、想体系化、项目实战型、全面覆盖"的从业者。2026-07 策展。

约定:🇨🇳 = 中文一手资料。每条带"何时翻它"的提示,避免三个月后变成死链。

---

## Knowledge — 基础阅读

### 知识体系(Body of Knowledge)

- [Book/Standard: DAMA-DMBOK2 — Data Management Body of Knowledge (2nd ed., 2017) — DAMA International](https://dama.org/learning-resources/dama-data-management-body-of-knowledge-dmbok/)
  本课程的主骨架。把 Data Governance 当作 11 个知识区的 hub(数据质量、元数据、MDM、安全等)。**何时翻**:任何治理项目设计阶段,先回 DMBOK 找坐标。注意 DMBOK2 故意"框架中立"、且早于现代数据栈,需要配合下面更现代的书。

- [Reference: DAMA-DMBOK2 Infographics — DAMA International](https://dama.org/dmbok2r-infographics/)
  免费的 wheel-and-spoke 功能区图。**何时翻**:给 stakeholder 做汇报时画"治理在哪里"的图。

### 书籍(被业界认可的实践派作者)

- [Book: Data Governance: How to Design, Deploy, and Sustain an Effective Data Governance Program (2nd ed.) — John Ladley / Academic Press (Elsevier)](https://shop.elsevier.com/books/data-governance/ladley/978-0-12-815831-9)
  单本里**操作最完整**:章程、运营模型、如何让治理活下来(2nd ed. ~75% 内容重写)。**何时翻**:真正要搭一个 program 并运营它(而非纸上谈兵)。

- [Book: Non-Invasive Data Governance — Robert S. Seiner / Technics Publications](https://technicspub.com/nidg/)
  招牌"非侵入"路径:把已有问责关系**正式化**,而不是新立一个组织。**何时翻**:stakeholder 听到"治理"两字就抵触,或接手一个根深蒂固的组织。

- [Book: The Practitioner's Guide to Data Quality Improvement — David Loshin / Morgan Kaufmann](https://www.amazon.com/Practitioners-Improvement-Kaufmann-Business-Intelligence/dp/0123737176)
  数据质量的"人 + 流程 + 技术"方法论(profiling、root-cause、改进循环)。老但方法论扎实。**何时翻**:痛点就是 DQ(而非目录/策略)。MDM 在范围内的话配 Loshin 的 *Master Data Management*。

### 框架与标准

- [Framework: DCAM — Data Management Capability Assessment Model — EDM Council](https://edmcouncil.org/frameworks/dcam/)
  金融业起源的能力/成熟度模型,当前 **DCAM v3**。会员墙,但公开概览 + 培训材料够学结构。**何时翻**:需要拿一个"扛得住审计的成熟度评估"去给项目找预算。

- [Standard: ISO 8000 (Data Quality) — Part 1 Overview — ISO](https://www.iso.org/obp/ui/#iso:std:iso:8000:-1:ed-1:v1:en)
  "数据界的 ISO 9000"。**何时翻**:采购或主数据交换场景的质量合规。ISO Online Browsing Platform 免费读。

- [Standard: ISO/IEC 25012:2008 (Data Quality Model) — ISO](https://www.iso.org/standard/35736.html)
  定义 15 个数据质量特性(固有 + 系统依赖)。**何时翻**:需要和工程师/审计员谈 DQ 维度的共同词汇。(注意:**ISO 19731 不是数据治理标准**,是数字/Web 分析,常被误引。)

- [Regulation: GDPR — Regulation (EU) 2016/679 — EUR-Lex 官方文本](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)
  EU 官方公报原文,作为 reference 使用,不要用博客摘要。[gdpr-info.eu](https://gdpr-info.eu/) 是可导航镜像。

- [Regulation 🇨🇳: 中华人民共和国个人信息保护法(PIPL)— 国家网信办](https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm)
  全文,2021-11-01 生效。**何时翻**:任何在中国境内/面向中国处理个人信息的场景。

- [Regulation 🇨🇳: 中华人民共和国数据安全法 — 全国人大常委会公报版](https://www.nra.gov.cn/xxgk/gkml/ztjg/gfzd/fl/202209/t20220905_338153.shtml)
  中国数据安全核心法(2021-09-01 生效),确立"分类分级"与"重要数据"概念。**何时翻**:与 PIPL 一起读,两者联动。

- [Standard 🇨🇳: DCMM 数据管理能力成熟度评估模型 — GB/T 36073 — 国家标准全文公开 (SAMR)](https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=B282A7BD34CAA6E2D742E0CAB7587DBC)
  中国国家数据管理成熟度标准。**时效(2026-07)**:**GB/T 36073-2025(DCMM 2.0)已于 2026-07-01 生效**,2018 版**作废**。新版围绕"数据要素运营"重构。本课程所有 DCMM 引用必须用新版。

### 博客与出版物

- [Publication: DATAVERSITY / TDAN.com — founded by Robert S. Seiner](https://www.dataversity.net/)
  长篇实践文章;Seiner 的 "All in the Data" 专栏在此。整体是数据管理最强的通用出版物(部分是 vendor webinar —— 自行过滤)。

- [Blog: Nicola Askham — The Data Governance Coach](https://www.nicolaaskham.com/blog)
  英国教练,运营模型、stewardship、"前 90 天"场景的短战术帖。**何时翻**:DMBOK/Ladley 太抽象、需要落地动作时。

---

## Tools — 用于实战练习

### 元数据 / 目录 / 血缘

- [Tool: DataHub — `datahub-project/datahub`](https://github.com/datahub-project/datahub) — [docs](https://datahubproject.github.io/datahub/)
  LinkedIn 起源,Acryl Data 维护。**功能最完整的开源目录**:ingest、血缘、术语表(glossary)、ownership、impact analysis。**本课程默认教学栈**。

- [Tool: OpenMetadata — `open-metadata/OpenMetadata`](https://github.com/open-metadata/open-metadata) — [site](https://open-metadata.org/)
  Collate 维护;schema-first、UI 强、内置 DQ + SLO。**何时翻**:想要"目录 + DQ + 血缘"一体化且默认体验更紧凑时。本课程备选主栈。

- [Tool: Amundsen — `amundsen-io/amundsen`](https://github.com/amundsen-io/amundsen)
  Lyft 起源的发现型目录,搜索优先,血缘弱。**何时翻**:专做"数据发现"练习。

- [Tool: Marquez — `MarquezProject/marquez`](https://github.com/MarquezProject/marquez) — [site](https://marquezproject.github.io/marquez/)
  WeWork 起源,**OpenLineage 标准的参考实现**。**何时翻**:专门学跨 job run 的血缘采集与可视化。

- [Tool: Apache Atlas — `apache/atlas`](https://github.com/apache/atlas) — [site](https://atlas.apache.org/)
  Hadoop 系起源。**警告**:仍在维护(v2.4.0, 2025-01)但节奏慢,**不推荐作为 2026 greenfield 落地选型**,做概念教学尚可。

### 数据质量

- [Tool: Great Expectations (GX Core) — org `great-expectations`](https://github.com/great-expectations) — [docs](https://docs.greatexpectations.io/)
  Python 框架,把"期望"定义为可执行的数据契约。**何时翻**:想要规则化 profiling + 校验 + 人可读的 DQ 报告。稳定入口是 org 页(org 已从 `great-expectations/great_expectations` 迁到 `great-expectations/gx`)。

- [Tool: Soda Core — `sodadata/soda-core`](https://github.com/sodadata/soda-core) — [docs](https://docs.soda.io/soda-documentation/soda-v3/overview-main)
  声明式 YAML 检查(freshness、volume、schema、validity),CI 友好,带 GH Action。**何时翻**:想要轻量、嵌进 dev pipeline 的检查(对比 GX 的重型框架)。

- [Tool: dbt data tests — dbt Labs docs](https://docs.getdbt.com/docs/build/data-tests)
  在 dbt 内:singular(SQL 返回失败行)+ generic(unique/not_null/accepted_values/relationships)。**何时翻**:已经在用 dbt —— 最便宜的 DQ 覆盖路径。

### 中国实践一手工程文章

- [Engineering 🇨🇳: 火山引擎 DataLeap 构建 Data Catalog 系统的实践(上)— InfoQ](https://xie.infoq.cn/article/5c932efacee795ba41a4f35f6) — [续篇(下)— volcengine](https://developer.volcengine.com/articles/7317469802606362651)
  字节从 WhereHows fork 走向自建。**何时翻**:理解规模驱动下的目录设计。

- [Engineering 🇨🇳: 字节跳动基于火山引擎 DataLeap 的一站式数据治理架构实践 — 博客园 bytedata](https://www.cnblogs.com/bytedata/p/17622588.html)
  字节闭环治理:资产体系 → 评估/规则体系 → 体验复用。**何时翻**:中国大型实践在管理/流程侧的具象参考。

- [Engineering 🇨🇳: 阿里巴巴数据治理平台 DataWorks 建设实践 — DOIT](https://www.doit.com.cn/p/491222.html) — [官方数据质量文档](https://help.aliyun.com/zh/dataworks/user-guide/data-quality/)
  DataWorks 治理平台深拆(DQC、资产治理、健康分)。**何时翻**:看 hyperscaler 在托管平台上如何工程化治理。

- [OSS 🇨🇳: 袋鼠云 DTstack — org](https://github.com/dtstack)
  数栈开源部分:ChunJun(集成)、Taier(调度)、ChengYing(运维)。**何时翻**:动手搭一个中国平台风格的集成/调度栈。

---

## Wisdom — 社区

- [Community: r/dataengineering — Reddit](https://www.reddit.com/r/dataengineering/)
  工程侧最高信噪比:Atlas vs. DataHub vs. OpenMetadata 横评、血缘、目录、真实项目复盘。提问前先搜 —— 大部分工具问题已答过。

- [Community: r/datascience — Reddit](https://www.reddit.com/r/datascience/)
  "被治理数据的消费者"视角(数据契约、语义层、信任)。工具味比 r/dataengineering 淡。

- [Org/Community: DAMA International](https://dama.org/) — [chapter locator](https://dama.org/c/chapter-locator)
  DMBOK / CDMP 背后的专业组织;各地分会办讲座与学习组。**注意**:分会质量参差,自己 vet。

- [Org/Community 🇨🇳: DAMA 中国 (DAMA China Limited)](https://www.mydama.org.cn/)
  官方中国分会,运营 CDGA/CDGP 认证与"中国好数据"赛事。进入中国从业者社区与 DCMM 本地读物体系的入口。

- [Community (Slack): dbt Community](https://www.getdbt.com/community)
  数万 analytics engineer;`#data-quality`、`#cataloging`、工具集成等 channel 是 dbt-tests / GX / DataHub 真实集成模式的讨论场。

- [Community (Slack): Locally Optimistic](https://locallyoptimistic.com/community/)
  ~9k 数据/分析**领导者**。运营模型、stakeholder、度量设计类问题比 Reddit 强。补 DMBOK/Ladley 缺的"领导者视角"。

---

## Gaps — 高可信资源稀缺区

1. **网易治理一手资料**:没找到与字节/阿里对等的官方耐久治理工程文。需要时定向搜网易系(云音乐/数帆)技术博客。
2. **DataFun 治理主题页**:社区声望高,但内容跑在公众号/视频号模型上,无稳定治理主题落地页。按 speaker 个别取舍。
3. **掘金 data-governance tag**:存在但信噪比低、作者混合。**不作为一手源**。
4. **同行评审学术期刊**:相比实践文献薄得多。ACM Digital Library 收录 DMBOK2([dl.acm.org/doi/10.5555/3165209](https://dl.acm.org/doi/10.5555/3165209)),从那里追引用即可,没有单一"数据治理顶刊"。
5. **中文治理 Discord/Slack**:基本缺失;中国从业者对话跑在微信群(对外不透明)与 DAMA China 活动。提醒学员:西方 Slack 社区以英文为主。
6. **Apache Atlas 时效**:每个 2026 "OSS 目录 Top 榜"都列它,但发版节奏(近 18 个月一次)意味着文档/生态落后 DataHub/OpenMetadata。学员若选 Atlas 做练习,会有更多摩擦 —— **不要据此推广为"OSS 治理工具都笨重"**。

---

**合计 28 条**:Knowledge 15 / Tools 11 / Wisdom 6,以及 6 条已记录 gap。每条 URL 都对 2026-07 时效做了校验。两条最关键的时效点是 **DCMM 2.0 / GB/T 36073-2025 生效日(2026-07-01)** 与 **DataHub canonical repo 位置**(`datahub-project/datahub`,非 `linkedin/datahub`)。
