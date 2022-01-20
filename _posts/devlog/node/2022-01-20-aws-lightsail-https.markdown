---
layout: post
title: 'AWS LightSail 로드 밸런서를 사용하여 HTTPS 보안 연결.'
subtitle: 'AWS LightSail 로드 밸런서를 사용하여 HTTPS 보안 연결.'
category: devlog
tags: node
comments: true
# image: 
#   path: /assets/img/default_code.png
---

### AWS LightSail 로드 밸런서를 사용하여 HTTPS 보안 연결.

# 요약

1. AWS Route53 도메인 구입 및 등록
2. LightSail DNS 생성
3. 호스팅 네임 서버 추가
4. LightSail 로드 밸런서 생성
5. https 인증서 생성 및 DNS 연결

## 1. AWS Route53 도메인 구입 및 등록

아래 경로에서 원하는 도메인을 구매한다.

EC2 세팅의 경우 route53 에서 구매하면 편하게 세팅할 수 있는 장점이 있지만, LightSail 은 그렇지 않으니 타사를 이용해도 관계가 없다.

- [https://console.aws.amazon.com/route53](https://console.aws.amazon.com/route53)

![스크린샷 2022-01-20 오후 4.53.59.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bfe2091f-5d50-4983-9156-8910feef6b16/스크린샷_2022-01-20_오후_4.53.59.png)

## 2. LightSaile DNS 생성

네트워킹 메뉴에서 DNS 영역을 생성 한다.

![스크린샷 2022-01-20 오후 4.56.36.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dae5446d-d4b1-4c43-a95c-37a52ecb4838/스크린샷_2022-01-20_오후_4.56.36.png)

호스팅에 이름 서버를 추가 하기위해 생성된 DNS 영역 하단의 이름 서버를 복사한다.

![스크린샷 2022-01-20 오후 5.01.55.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/17baa416-1bdd-4f8b-8cc8-f2415da8fdfc/스크린샷_2022-01-20_오후_5.01.55.png)

## 3. 호스팅에 네임서버 추가

본 포스팅은 AWS Route53 에서 진행하였으므로 타사를 이용했다면 구매한 호스팅 사이트에서 진행해야 됩니다.

DNS 에서 복사한 이름 서버를 아래 `이름 서버 추가 또는 편집` 에 넣어 줍니다.

- [https://console.aws.amazon.com/route53/home#DomainListing](https://console.aws.amazon.com/route53/home#DomainListing:)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ca069435-669b-4082-894e-e9c7818c2f88/Untitled.png)

## 4. LightSail 로드 밸런서 생성

다시 라이트세일로 돌아와서, 로드 밸런서를 생성합니다.

![스크린샷 2022-01-20 오후 5.08.09.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c0b05286-333e-4e01-8235-123e43a0716a/스크린샷_2022-01-20_오후_5.08.09.png)

기존에 사용중인 인스턴스를 로드 밸런서에 연결.

![스크린샷 2022-01-20 오후 5.08.56.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/31ca638a-e136-4a76-aa98-bb7665f5b202/스크린샷_2022-01-20_오후_5.08.56.png)

## 5.  https 인증서 생성 및 DNS 연결

로드 밸런서에서 https 인증서를 생성합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f0704c8b-ab2b-4751-bffe-a4725cf15d78/Untitled.png)

인증서를 생성하면 기본 도메인, 하위 도메인 별로 레코드의 `이름`과 `값`이 생성 됩니다.

**이 이름/값을 DNS에 등록해야됩니다.**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6d7efe82-c009-4686-967d-d7e0943d70c6/Untitled.png)

다시 라이트세일의 DNS 영역으로 돌아와서 `CNAME 레코드`를 추가 합니다.

레코드 등록시 기본 도메인이 디폴트로 들어가있기 때문에 그대로 복사 붙혀넣기 하면 **도메인값이 중복**되니 주의해줍니다.

- 인증서 이름 → 도메인
- 인증서 값 → 매핑

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c405d4ee-87d9-4730-8d21-e34d3e42a1b0/Untitled.png)

등록 후 잠시 기다리면... 아래 처럼 사용가능한 상태가 됩니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1a0dd3e6-d58b-4a97-9ac3-dd07b981e17e/Untitled.png)