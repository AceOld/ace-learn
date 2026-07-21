# 量化交易数学 Resources

## Knowledge

### 金融工程 / 定价圣经
- [Book: _Options, Futures, and Other Derivatives_ — John C. Hull (Pearson, 11th ed., 2021)](https://www.pearson.com/en-us/subject-catalog/p/options-futures-and-other-derivatives/P200000005938/9780136939917)
  衍生品市场"圣经"。覆盖期权/期货定价、Black-Scholes、希腊值、利率模型。Use for: 衍生品与定价入门主线教材。
- [Book: _Stochastic Calculus for Finance I & II_ — Steven E. Shreve (Springer)](https://link.springer.com/book/10.1007/978-0-387-22527-2)
  Vol I 用二叉树离散时间建立无套利定价直觉;Vol II 推进到布朗运动、Itô 引理、SDE、风险中性定价。Use for: 随机微积分严格基础,在 Hull 之后深入。

### 量化交易实务与策略
- [Book: _Advances in Financial Machine Learning_ — Marcos López de Prado (Wiley)](https://www.wiley.com/en-us/Advances+in+Financial+Machine+Learning-p-9781119482086)
  ML 方法系统化应用于金融预测:特征工程、交叉验证、元标签、回测过拟合防护。Use for: 进入 ML 驱动策略阶段。
- [Book: _Quantitative Trading_ — Ernest P. Chan](https://epchan.com/books)
  零售/独立量化交易者实务指南:策略发现、回测、仓位管理、风险控制。Use for: 从理论走向独立构建可运行策略。
- [Book: _Active Portfolio Management_ (2nd ed.) — Grinold & Kahn](https://www.amazon.com/dp/0070248826)
  主动组合管理量化圣经:预期收益建模、风险模型、信息比率、主动管理基本定律。Use for: 选股/因子组合/主动组合构建。

### 金融时间序列
- [Book: _Analysis of Financial Time Series_ (3rd ed.) — Ruey S. Tsay (Wiley)](https://onlinelibrary.wiley.com/doi/book/10.1002/9780470644560)
  ARIMA、GARCH 族波动率模型、高频数据、VAR 多元时间序列。Use for: 波动率/收益率预测建模核心参考。
- [Book: _Time Series Analysis_ — James D. Hamilton (Princeton UP)](https://press.princeton.edu/books/hardcover/9780691042893/time-series-analysis)
  时间序列计量经济学权威教材:VAR、GMM、谱分析、状态空间、卡尔曼滤波。Use for: 需要严格计量基础时的深度补充。

### 投资组合理论与因子模型(原始论文 + 主线教材)
- [Paper: Markowitz, "Portfolio Selection" (Journal of Finance, 1952)](https://www.jstor.org/stable/2975974)
  均值-方差框架与有效前沿的原始提出。Use for: MPT 数学起源第一手文献。
- [Paper: Sharpe, "Capital Asset Prices" (Journal of Finance, 1964)](https://www.jstor.org/stable/2977928)
  CAPM 原始表述,系统风险与期望收益关系。Use for: β 与资产定价均衡理论来源。
- [Paper: Fama & French, "Common Risk Factors..." (JFE, 1993)](https://www.sciencedirect.com/science/article/pii/0304405X93900235) + [Kenneth French 数据库](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/Data_Library/f-f_factors.html)
  三因子模型(MKT/SMB/HML)。Use for: 因子投资实证起点,数据库可直接复现作业。
- [Book: _Investments_ — Bodie, Kane, Marcus (McGraw-Hill)](https://www.mheducation.com/highered/product/investments-bodie.html)
  把 Markowitz/CAPM/APT/Fama-French 串成体系的主线教材。Use for: 组合理论统一教学主线。

### 量化面试数学(可作为概率直觉训练)
- [Book: _A Practical Guide To Quantitative Finance Interviews_ — Xinfeng Zhou](https://www.amazon.com/Practical-Guide-Quantitative-Finance-Interviews/dp/1438236662)
  "绿皮书"。概率、brain teaser、随机过程题集。Use for: 概率直觉训练 / 求职备考。
- [Book: _Heard on the Street_ — Timothy Falcon Crack](http://www.foundationsforscientificinvesting.com/books.htm)
  华尔街量化面试题汇编,概率与衍生品直觉。Use for: 与 Zhou 互补(后者兼顾衍生品直觉)。

## Wisdom (Communities & 实战平台)

- [QuantConnect](https://www.quantconnect.com/)
  云端多资产算法交易平台,内置数据与回测/实盘引擎,社区共享策略。Use for: 实战与社区学习主平台。
- [Zipline-Reloaded](https://github.com/stefan-jansen/zipline-reloaded)
  Pythonic 事件驱动回测引擎(Quantopian 关停后的维护分支)。Use for: 本地事件驱动回测。
- [Backtrader](https://www.backtrader.com/)
  功能丰富的本地 Python 回测/交易框架。Use for: 轻量本地策略迭代。
- [QuantLib](https://www.quantlib.org/) / [QuantLib-SWIG](https://github.com/lballabio/QuantLib-SWIG)
  生产级开源定价/估值引擎。Use for: 衍生品/固定收益生产级定价。
- [pyfolio-reloaded](https://github.com/stefan-jansen/pyfolio-reloaded)
  组合业绩与风险分析,生成 tear sheet。Use for: 回测后标准化绩效归因。
- [statsmodels](https://www.statsmodels.org/)
  统计建模与假设检验(OLS/时间序列/状态空间)。Use for: 因子回归与计量统计。

## Gaps
- 线性代数 / 最优化理论尚无指定主线教材(理工科本科基础足够,后续按需补充 Boyd《Convex Optimization》)。
- 高频/市场微观结构暂列 out of scope。
